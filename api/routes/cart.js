const express = require('express');
var router = express.Router();
var Cart = require('../models/cart');
var mongoose = require('mongoose');


router.get('/', (req, res, next) => {
    Cart.find().select('_id productId').exec().then(cartItems => {
        res.status(200).json({
            result: cartItems
        });
    }).catch(err => {
        res.status(500).json({
            message: "Can't get items from the cart at the moment please try after some time"
        });
    });
});

router.post('/', (req, res, next) => {
    console.log(req.body.userId)
    const cartItem = new Cart({
        _id: new mongoose.Types.ObjectId(),
        productId: req.body.productId,
        userId: req.body.userId
    });

    cartItem.save().then(result => {
        res.status(200).json({
            message: "Item successfully added to the cart",
            result: result,
        });
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            message: "Can't add item to the cart at the moment please try after some time"
        });
    })
});

module.exports = router;
