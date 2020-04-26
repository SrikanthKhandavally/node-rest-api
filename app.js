const express = require('express');
const app = express();
const morgan = require('morgan');

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders')
const userRoutes = require('./api/routes/users')
const cartRoutes = require('./api/routes/cart')
const wishListRoutes = require('./api/routes/wishList')
const addressRoutes = require('./api/routes/address')

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.set('useCreateIndex', true);

mongoose.connect("mongodb+srv://srikanth:Sitaram0116@node-rest-rmfns.mongodb.net/test?retryWrites=true", {useNewUrlParser: true, useUnifiedTopology: true });

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/uploads', express.static("uploads"))
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*");
    res.header(
        'Access-Control-Allow-Headers', "*"
    );
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
        return res.status(200).json({})
    }
    next();

});

app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/user', userRoutes);
app.use('/cart', cartRoutes);
app.use('/wishlist', wishListRoutes);
app.use('/address', addressRoutes);

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})


module.exports = app;