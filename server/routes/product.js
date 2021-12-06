const router = require('express').Router();
const User = require('../models/User');
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');

// Update user data
router.put('/:id', verifyTokenAndAuthorization, async (req, res, next) => {
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

// Delete user data
router.delete('/:id', verifyTokenAndAuthorization, async (req, res) => {

    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted ...")

    } catch (error) {
        res.status(500).json(error);
    }
})

// Get user data
router.post('/find/:id', /*verifyTokenAndAdmin,*/ async (req, res) => {

    try {
        const user = await User.findById(req.params.id);

        res.status(201).json({
            'username': user.username,
            'email': user.email,
            'isAdmin': user.isAdmin,
            'createdAt': user.createdAt,
            'updatedAt': user.updatedAt
        });

    } catch (error) {
        res.status(500).json(error);
    }
})

// Get all users data
router.post('/findall', /*verifyTokenAndAdmin,*/ async (req, res) => {

    const query = req.query.new;

    try {
        // It will return newest 5 user, if we will have ?new=true url in search url 
        // Other else will return all users
        const users = query ? await User.find().sort({ _id: -1 }).limit(2) : await User.find();

        res.status(201).json({ users });

    } catch (error) {
        res.status(500).json(error);
    }
})

// Get user stats
router.post('/stats', /* verifyTokenAndAdmin, */ async (req, res) => {

    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
    
    try {
        const data = await User.aggregate([
            {$match: {createdAt: {$gte: lastYear}}},
            {
                $project: {
                    month: { $month: "$createdAt"}
                },
            },
            {
                $group: {
                    _id: "$month", 
                    total: { $sum: 1 }
                }
            }
        
        ])
        res.status(201).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
})


module.exports = router