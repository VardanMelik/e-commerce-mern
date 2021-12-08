const router = require('express').Router();
const Order = require('../models/Order');
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');


// Create Order
router.post('/add', /* verifyToken */ async (req, res) => {

    const newOrder = new Order(req.body)
    try {
        const savedOrder = await newOrder.save()
        res.status(200).json(savedOrder)
    } catch (error) {
        res.status(500).json(error)
    }
})


// Update Order data
router.put('/:id', /*verifyTokenAndAdmin, */ async (req, res, next) => {

    try {
        const updatedOrer = await Product.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true });

        res.status(201).json({
            updatedOrer
        });

    } catch (error) {
        res.status(500).json(error);
    }
})

// Delete order data
router.delete('/:id', /*verifyTokenAndAdmin,*/ async (req, res) => {

    try {
        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json("Order has been deleted ...")

    } catch (error) {
        res.status(500).json(error);
    }
})

// Get user orders data
router.post('/find/:userId', /*verifyTokenAndAuthorization, */  async (req, res) => {

    try {
        const orders = await Order.findOne({ userId: req.params.userId });

        res.status(201).json({
            orders
        });

    } catch (error) {
        res.status(500).json(error);
    }
})

// Get all orders
router.post('/', /*verifyTokenAndAdmin,*/ async (req, res) => {

    try {
        const orders = await Order.find();
        res.status(200).json({ orders })

    } catch (error) {
        res.status(500).json(error)
    }
})

    // Thsi request does not work
// Get monthly income
router.post('/income', /*verifyTokenAndAdmin, */ async (req, res) => {

    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1))
    const previusMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1))

    try {

        const income = await Order.aggregate([
            { $match: { createAt: { $gte: previusMonth } } },
            {
                $project: {
                    month: { $month: "$createdAt" },
                    sales: "$amount",
                }
            },

            {
                $group: {
                    _id: "$month",
                    total: { $sum: "$sales" }
                }
            },
        ]);
        res.status(200).json(income)

    } catch (error) {
        res.status(500).json(error)
    }
})


module.exports = router