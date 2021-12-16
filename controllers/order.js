const Order = require("../models/order");


module.exports = {
    async addOrder(req, res) {
        let respObj = {
            IsSuccess: false,
            Message: "OK.",
            Data: null,
        };

        try {
            await Order.findOne({
                order_id: req.body.order_id
            }).then(async function(data){
                if(data){
                    respObj.IsSuccess = true;
                    respObj.Message = "Order id is must be unique"
                    res.status(200).json(respObj);
                }else{
                    let result = await new Order(req.body).save()
                    respObj.IsSuccess = true;
                    respObj.Message = "Susscefully added"
                    res.status(200).json(respObj);
                }
            })
            
        } catch (err) {
            respObj.error = err;
            (respObj.message = err.message || "Error while processing db query"),
                res.status(500).json(respObj);
        }
    },
    async getAllOrders(req, res) {
        let respObj = {
            IsSuccess: false,
            Message: "OK.",
            Data: null,
        };

        try {
            let result = await Order.find({
                order_date: req.params.date
            })

            respObj.IsSuccess = true;
            respObj.Data = result
            respObj.Message = "Susscefully get all data"
            res.status(200).json(respObj);

        } catch (err) {
            respObj.error = err;
            (respObj.message = err.message || "Error while processing db query"),
                res.status(500).json(respObj);
        }
    },

    async getSpecificOrder(req, res) {
        let respObj = {
            IsSuccess: false,
            Message: "OK.",
            Data: null,
        };

        try {
            let result = await Order.find({ _id: req.params.orderId })

            respObj.IsSuccess = true;
            respObj.Data = result
            respObj.Message = "Succefully get all data"
            res.status(200).json(respObj);

        } catch (err) {
            respObj.error = err;
            (respObj.message = err.message || "Error while processing db query"),
                res.status(500).json(respObj);
        }
    }
    
}

