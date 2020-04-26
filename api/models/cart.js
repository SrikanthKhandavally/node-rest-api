const mongoose = require('mongoose');


const cartSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    productId: String,
    userId: String
});

module.exports = mongoose.model('Cart', cartSchema);
