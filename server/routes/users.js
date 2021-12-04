const router = require('express').Router();

router.get('/usertest', (req, res) => {
    res.send({ json: 'user test is working'})
})

router.post('/userposts', (req, res) => {
    console.log(req.body.username)
    //const username = req.body.username;
    res.send('All is ok')
})

module.exports = router