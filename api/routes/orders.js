const mongoose = require('mongoose');
const express = require('express');
const Order = require('../models/order');
var router = express.Router();

router.get("/", (req, res, next) => {
    res.status(200).json({
        messsage: "GET for orders"
    });
});




router.post("/", (req, res, next) => {
    // const locations = req.body.locations;
    // locations = locations.split(",");
    const order = new Order({
        _id: new mongoose.Types.ObjectId(),
        productId: req.body.productId,
        userId: req.body.userId,
        soldBy: req.body.soldBy,
        quantity: req.body.quantity,
        orderPlacedDate: req.body.orderPlaced,
        locationsFromOrigin: req.body.locations,
        paymentMethod: req.body.paymentMethod,
        deliveryDate: req.body.deliveryDate,
        orderStatus: req.body.orderStatus
    });
    order.save().then(result => {
        res.status(201).json({
            message: 'Order placed successfully',
        });
    }).catch(err => {
        res.status(500).json({
            message: "Please try after sometime"
        });
    })
});

router.get('/:userId', (req, res, next) => {
    const id = req.params.userId;
    Order.find()
    .where('userId').equals(id)
    .exec().then(result => {
        console.log(result)
        res.status(200).json({
            result
        })
    }).catch(err => console.log(err))
});




module.exports = router;

