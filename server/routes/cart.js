const router = require('express').Router();
const Cart = require('../models/Cart');
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');


// Create Cart
router.post('/add', /* verifyToken */ async (req, res) => {

    const newCart = new Cart(req.body)
    try {
        const savedCart = await newCart.save()
        res.status(200).json(savedCart)
    } catch (error) {
        res.status(500).json(error)
    }
})


// Update cart data
router.put('/:id', /*verifyTokenAndAuthorization,*/ async (req, res, next) => {
    
    try {
        const updatedCart = await Product.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true });

        res.status(201).json({
            updatedCart
        });

    } catch (error) {
        res.status(500).json(error);
    }
})

// Delete cart data
router.delete('/:id', /*verifyTokenAndAuthorization,*/ async (req, res) => {

    try {
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json("Cart has been deleted ...")

    } catch (error) {
        res.status(500).json(error);
    }
})

// Get user cart data
router.post('/find/:userId', /*verifyTokenAndAuthorization, */  async (req, res) => {

    try {
        const cart = await Product.findOne({ userId: req.params.userId});

        res.status(201).json({
            cart
        });

    } catch (error) {
        res.status(500).json(error);
    }
})

// Get all cart
router.post('/', /*verifyTokenAndAdmin,*/ async(req, res) => {

    try {
        const carts = await Cart.find();
        res.status(200).json({ carts })

    } catch (error) {
        res.status(500).json(error)
    }
})
module.exports = router