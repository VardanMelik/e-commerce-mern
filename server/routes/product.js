const router = require('express').Router();
const Product = require('../models/Product');
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');


// Create product
router.post('/add', /*verifyTokenAndAdmin,*/ async (req, res) => {

    const newProduct = new Product(req.body)
    try {
        const savedProduct = await newProduct.save()
        res.status(200).json(savedProduct)
    } catch (error) {
        res.status(500).json(error)
    }
})


// Update user data
router.put('/:id', /*verifyTokenAndAdmin,*/ async (req, res, next) => {
    
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true });

        res.status(201).json({
            updatedProduct
        });

    } catch (error) {
        res.status(500).json(error);
    }
})

// Delete user data
router.delete('/:id', /*verifyTokenAndAdmin,*/ async (req, res) => {

    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json("Product has been deleted ...")

    } catch (error) {
        res.status(500).json(error);
    }
})

// Get product data
router.post('/find/:id', async (req, res) => {

    try {
        const product = await Product.findById(req.params.id);

        res.status(201).json({
            product
        });

    } catch (error) {
        res.status(500).json(error);
    }
})

// Get all product data
router.post('/findall', async (req, res) => {

    const qNew = req.query.new;
    const qCategory = req.query.category;


    try {
        let products;

        if (qNew) {
            products = await Product.find().sort({ createdAt: -1 }).limit(1)
        } else if (qCategory) {
            products = await Product.find({ categories: {
                $in:[qCategory],
            }
        });
        } else {
            products = await Product.find();
        }


        res.status(201).json({ products });

    } catch (error) {
        res.status(500).json(error);
    }
})


module.exports = router