"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    order_id: {
        type: String,
        required: true,
        unique: true,
        // index: true
    },
    item_name: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        default: 0,
        required: true
    },
    order_date: {
        type: Date,
        default: Date.now()
    },
    delivery_date: {
        type: Date,
    },
}, {
    timestamp: true,
    autoIndex: true,
    versionKey: false,
});

let Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
