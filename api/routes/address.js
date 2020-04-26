const express = require('express');
var router = express.Router();
var Address = require('../models/address');
var mongoose = require('mongoose');

router.post("/", (req, res, next) => {
    // const locations = req.body.locations;
    // locations = locations.split(",");
    const address = new Address({
        _id: new mongoose.Types.ObjectId(),
        userId: req.body.userId,
        street1: req.body.street1,
        street2: req.body.street2,
        city: req.body.city,
        state: req.body.state,
        contact: req.body.contact
    });
    address.save().then(result => {
        res.status(201).json({
            message: 'address saved successfully',
        });
    }).catch(err => {
        res.status(500).json({
            message: "Please try after sometime"
        });
    })
});


router.get('/:userId', (req, res, next) => {
    const user = req.params.userId;
    Address.find()
    .where('userId').equals(user)
    .exec().then(result => {
        console.log(result)
        res.status(200).json({
            result
        })
    }).catch(err => console.log(err))
});

module.exports = router;
