const express = require('express');
const Order = require('../models/order');
var router = express.Router();

router.get("/", (req, res, next) => {
    res.status(200).json({
        messsage: "GET for orders"
    });
});

router.post("/", (req, res, next) => {
    const order = new Order({
        _id: new mongoose.Types.ObjectId(),
        productId: req.body.productId,
        userId: req.body.userId,
        quantity: req.body.quantity
    });
    order.save().exec().then(result => {
        res.status(201).json({
            message: 'Order placed successfully',
            
        });
    }).catch(err => {
        res.status(500).json({
            message: "Please try after sometime"
        });
    })
});



module.exports = router;

