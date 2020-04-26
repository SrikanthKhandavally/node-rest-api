const express = require('express');
var router = express.Router();
const mongoose = require('mongoose')

// const userAddressSchema = mongoose.Schema({
//     _id: mongoose.Schema.Types.ObjectId,
//     firstName: String,
//     lastName: String,
//     contact: Number,
//     street1: String,
//     street2: String,
//     city: String,
//     state: String,
//     pinCode: Number
// });


const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstName: String,
    lastName: String,
    email: {type: String,
         required: true,
         unique: true,
         match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/ 
        },
    password: String,
});



module.exports = mongoose.model('User', userSchema);