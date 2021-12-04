const router = require('express').Router();

router.get('/usertest', (req, res) => {
    res.send({ json: 'user test is working'})
})

router.post('userposts', (req, res) => {
    const username = req.body.username;
    res.send({ json: username})
})

module.exports = router