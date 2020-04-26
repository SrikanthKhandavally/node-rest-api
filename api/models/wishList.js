const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');


const wishListSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    productId: {type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}
});

module.exports = mongoose.model('wishList', wishListSchema);