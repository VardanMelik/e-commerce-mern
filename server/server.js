const dotenv = require('dotenv')
dotenv.config();

const express = require('express');
const app = express()
const bodyParser = require('body-parser')

const morgan = require('morgan')
const cors = require('cors')

const mongoose = require('mongoose')
const userRoute = require('./routes/users')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URL)
    .then( () => console.log("DB connection successfull"))
    .catch( error => console.log("DB: " + error))

app.get('/api/test', (req, res) => {
    res.send({ json: 'test url is working'})
})

app.post('/test', (req, res) => {
    console.log(req.body);
    res.send('test')
})

app.use('/api/users', userRoute);


app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})