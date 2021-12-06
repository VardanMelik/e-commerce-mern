const router = require('express').Router();
const User = require('../models/User');
const { verifyToken, verifyTokenAndAuthorization } = require('./verifyToken');

router.put('/:id', async (req, res, next) => {
    if (req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString();
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true });

        res.status(201).json({
            'username': updatedUser.username,
            'email': updatedUser.email,
            'isAdmin': updatedUser.isAdmin
        });

    } catch (error) {
        res.status(500).json(error);
    }
    
})

module.exports = router