let express = require('express');
let router = express.Router();
let _order = require("../controllers/order")

router.post("/create", _order.addOrder);
router.get("/list/:date", _order.getAllOrders);


module.exports = router;