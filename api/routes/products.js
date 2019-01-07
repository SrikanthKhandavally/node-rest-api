const express = require('express');
var router = express.Router();
var Product = require('../models/product')
var mongoose = require('mongoose');

router.get('/', (req, res, next) => {
    Product.find().exec().then(docs => {
        res.status(200).json({
            result: docs
        });
    }).catch(err =>{console.log(err)});
});

router.post('/', (req, res, next) => {
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    });
    product.save()
    .then(result => {
        console.log(result)
    })
    .catch(err => console.log(err))
    res.status(200).json({
        message: "Handling POST request to /products",
        products: product
    });
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    Product.findById(id).exec().then(result => {
        console.log(result)
        res.status(200).json({
            result
        })
    }).catch(err => console.log(err))

});

router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: `Patching for productId: ${req.params.productId}`
    });
});     



module.exports = router;

