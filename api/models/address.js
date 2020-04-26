const mongoose = require('mongoose');


const addressSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    street1: String,
    street2: String,
    city: String,
    state: String,
    pinCode: String,
    contact: String
});

module.exports = mongoose.model('Address', addressSchema);
