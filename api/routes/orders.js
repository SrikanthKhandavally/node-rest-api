const express = require('express');
var router = express.Router();

router.get("/", (req, res, next) => {
    res.status(200).json({
        messsage: "GET for orders"
    });
});

router.post("/", (req, res, next) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    }
    res.status(200).json({
        message: "POST method for orders"
    });
});



module.exports = router;

