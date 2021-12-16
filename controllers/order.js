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
            }).then(async function (data) {
                if (data) {
                    respObj.IsSuccess = true;
                    respObj.Message = "Order id must be unique"
                    res.status(200).json(respObj);
                } else {
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
                order_date: req.body.order_date
            })
            result ? res.status(200).send({
                Message: "Susscefully fetch all orders",
                IsSuccess: true,
                Data: result
            }) :
                result.status(422).send({
                    Message: "Failed to fetch",
                    IsSuccess: false
                })

        } catch (err) {
            respObj.error = err;
            (respObj.message = err.message || "Error while processing db query"),
                res.status(500).json(respObj);
        }
    },

    async deleteOrderById(req, res) {
        let respObj = {
            IsSuccess: false,
            Message: "OK",
            Data: null,
        };

        try {
            let result = await Order.findOneAndDelete({ order_id: req.body.orderId })
            result ? res.status(200).send({
                Message: "Susscefully deleted order",
                IsSuccess: true,
                Data: result
            }) :
                result.status(422).send({
                    Message: "Failed to delete",
                    IsSuccess: false
                })

        } catch (err) {
            respObj.error = err;
            (respObj.message = err.message || "Error while processing db query"),
                res.status(500).json(respObj);
        }
    },


    async updateOrder(req, res) {
        let respObj = {
            IsSuccess: false,
            Message: "OK.",
            Data: null,
        };

        try {
            let result = await Order.findOneAndUpdate({ order_id: req.body.orderId },
                req.body, { upsert: true }, function (err, doc) {
                    if (err) return res.send(500, {
                        error: err, Message: "Failed to fetch",
                        IsSuccess: false
                    });
                    return res.send({
                        Message: "Susscefully fetch order",
                        IsSuccess: true,
                        Data: result
                    });
                });

        } catch (err) {
            respObj.error = err;
            (respObj.message = err.message || "Error while processing db query"),
                res.status(500).json(respObj);
        }
    },

    async getOrderById(req, res) {
        let respObj = {
            IsSuccess: false,
            Message: "OK.",
            Data: null,
        };

        try {
            console.log("req.body.orderId",req.body.order_id)
            let result = await Order.find({ order_id: req.body.order_id })
            console.log("result.................. ", result)
            result ? res.status(200).send({
                Message: "Susscefully fetch order",
                IsSuccess: true,
                Data: result
            }) :
                result.status(422).send({
                    Message: "Failed to fetch",
                    IsSuccess: false
                })

        } catch (err) {
            respObj.error = err;
            (respObj.message = err.message || "Error while processing db query"),
                res.status(500).json(respObj);
        }
    },


}
