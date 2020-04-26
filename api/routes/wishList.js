const mongoose = require('mongoose');
const express = require('express');
const wishList = require('../models/wishList');
var router = express.Router();



router.post("/", (req, res, next) => {
    // const locations = req.body.locations;
    // locations = locations.split(",");
    const wish = new wishList({
        _id: new mongoose.Types.ObjectId(),
        productId: req.body.productId,
        userId: req.body.userId
    });
    wish.save().then(result => {
        res.status(201).json({
            message: 'Product saved to wish list successfully',
        });
    }).catch(err => {
        res.status(500).json({
            message: "Please try after sometime"
        });
    })
});



router.get('/:productId/:userId', (req, res, next) => {
    const product = req.params.productId;
    const user = req.params.userId;
    wishList.find()
    .where('userId', 'productId').equals(user, product)
    
    .exec().then(result => {
        console.log(result)
        res.status(200).json({
            result
        })
    }).catch(err => console.log(err))
});

router.delete('/:Id', (req, res, next) => {
    const id = req.params.userId;
    wishList.find()
    .where('userId').equals(id)
    .exec().then(result => {
        console.log(result)
        res.status(200).json({
            result
        })
    }).catch(err => console.log(err))
});


module.exports = router;
