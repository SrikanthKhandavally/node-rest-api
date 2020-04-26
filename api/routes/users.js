const express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const User = require('../models/user');
const bcrypt = require('bcrypt');



router.post('/signup', (req, res, next) => {
    User.find({email: req.body.email}).exec().then(user => {
        if(user.length >= 1){
            return res.status(409).json({
                message: 'User already exists'
            });
        } else {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                if(err){
                    return res.status(500).json({
                        err: err
                    });
                } else {
                    console.log(req.body.firstName)
                    const user = new User({
                        _id: new mongoose.Types.ObjectId(),
                        firstName: req.body.firstName,
                        lastName: req.body.lastName,
                        email: req.body.email,
                        password: hash
                    });
                    user.save().then(result => {
                        console.log(result)
                        res.status(201).json({
                            message: "User successfully created"
                        });
                    }).catch(err => console.log("This is the error" + err))
        
                }
            });
        }
    });
});

router.post('/login', (req, res, next) => {
    User.find({email: req.body.email}).exec().then( user => {
        if(user.length < 1){
            res.status(401).json({
                message: 'Auth failed'
            })
        } 
        bcrypt.compare(req.body.password, user[0].password, (err, result) => {
            if(err){
                res.status(401).json({
                    message: 'Auth failed'
                });
            }
            if(result){
                res.status(200).json({
                    message: 'Auth Successfull'
                });
            }
            else{
                res.status(401).json({
                    message: 'Auth failed'
                });
            }

        });
    }).catch( err => console.log(err))
});


module.exports = router;
