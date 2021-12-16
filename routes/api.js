let express = require('express');
let router = express.Router();
let _order = require("../controllers/order")

router.post("/create", _order.addOrder);
router.post("/list", _order.getAllOrders);
router.post("/search", _order.getOrderById);
router.delete("/delete", _order.deleteOrderById);
router.post("/update", _order.updateOrder);
module.exports = router;