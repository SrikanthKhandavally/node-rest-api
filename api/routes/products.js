const express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Handling GET request to products"
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: "Handling POST request to /products"
    });
});

router.get('/:productId', (req, res, next) => {
    res.status(200).json({
        message: `Viewing orderId ${req.params.productId}`
    });
});

router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: `Patching for productId: ${req.params.productId}`
    });
});     



module.exports = router;

