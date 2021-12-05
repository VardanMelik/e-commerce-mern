const router = require('express').Router();
const { verifyToken } = require('./verifyToken')

router.put('/:id', verifyToken,  async (req, res) => {

    if (req.user.id === req.params.id || req.user.isAdmin) {
        
    } 

})

module.exports = router