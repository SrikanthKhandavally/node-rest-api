const mongoose = require('mongoose');

const productSchema =  mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    price: Number,
    productImage: {type: String},
    caloriesPerKilo: Number,
    producer: String,
    expectedDelivery: String,
    category: String,
    searchKeywords: Array
});

module.exports = mongoose.model('Product', productSchema);
