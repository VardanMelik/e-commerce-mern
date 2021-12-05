const router = require('express').Router();
const User = require('../models/User')
const CryptoJS = require("crypto-js");
const jwt = require('jsonwebtoken');

// Register
router.post('/register', async (req, res) => {

    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString()
    });
    //console.log(password)

    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
        
    } catch (error) {
        res.status(500).json(error);
    }
});

// Login
router.post('/login', async (req, res) => {

    try {
        const { username, email, password } = req.body;

        // Validated
        if (!username || !password) {
            return res
                .status(401)
                .json({ errorMessage: 'Please enter all required fields.'})
        }

        const existingUser = await User.findOne({ username });

        // Checking is user exists
        if (!existingUser) {
            return res
                .status(401)
                .json({ errorMessage: 'Wrong email or password.'})
        }

        const hashedPasswword = CryptoJS.AES.decrypt(existingUser.password, process.env.SECRET_KEY);
        const decryptedPassword =  hashedPasswword.toString(CryptoJS.enc.Utf8)

        if (password != req.body.password) {
            return res
                .status(401)
                .json({ errorMessage: 'Wrong credentials' })
        }

        const accessToekn = jwt.sign({
            id: existingUser.id,
            isAdmin: existingUser.isAdmin,
        }, process.env.JWT_SECRET, { expiresIn: '3d'})

        res
            .status(200)
            .json({
                'username': existingUser.username,
                'email': existingUser.email,
                'isAdmin': existingUser.isAdmin,
                'createdAt': existingUser.createdAt,
                'accessToken': accessToekn
            });

    } catch (error) {
        console.log('Something went wrong: ' + error);
        res
        .status(500)
        .json({ errorMessage: error.message })
    }
})

module.exports = router