const debug = require('debug')
const express = require('express')

const app = express();

debugWarn = debug('warn');
debugError = debug('error')

let port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    debugError('error happened');
    debugWarn('warn happened')
    res.send({
        status: 'Hello Debug'
    })
})





app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})