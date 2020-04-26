// import Product from './product';
// import user from './user';

const mongoose = require('mongoose');





const orderSchema =  mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    soldBy: {type: String},
    quantity: {type: Number, default: 1},
    orderPlacedDate: {type: Date},
    locationsFromOrigin: [{type: String, ref: 'Product'}],
    paymentMethod: {type: String},
    deliveryDate: {type: Date},
    orderStatus: {type: String},
    //deliveryAddress: mongoose.Schema.Types.ObjectId
});



module.exports = mongoose.model('Order', orderSchema);