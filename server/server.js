const express = require('express');
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const userRoute = require('./routes/users')

dotenv.config();



let PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URL)
    .then( () => console.log("DB connection successfull"))
    .catch( error => console.log("DB: " + error))

app.get('/api/test', (req, res) => {
    res.send({ json: 'test url is working'})
})

app.use('/api/user', userRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})