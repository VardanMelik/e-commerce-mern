const dotenv = require('dotenv')
dotenv.config();

const express = require('express');
const app = express()
const bodyParser = require('body-parser')

const morgan = require('morgan')
const cors = require('cors')

const mongoose = require('mongoose')
const userRoute = require('./routes/users')
const authRoute = require('./routes/auth');
const productRoute = require('./routes/product');
const cartRoute = require('./routes/cart');
const orderRoute = require('./routes/order')
const stripeRoute = require('./routes/stripe')

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


let PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URL)
    .then( () => console.log("DB connection successfull"))
    .catch( error => console.log("DB: " + error))

app.get('/api/test', (req, res) => {
    res.send({ json: 'test url is working'})
})

app.use('/api/users', userRoute);
app.use('/api/auth', authRoute)
app.use('/api/products', productRoute)
app.use('/api/cart', cartRoute)
app.use('/api/orders', orderRoute)
app.use('/api/checkout', stripeRoute)

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})