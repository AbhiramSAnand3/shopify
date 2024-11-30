const express = require('express');
const Product = require('../model/ProductModel')
const authenticate = require('../middlewares/auth');
const upload = require('../middlewares/upload');

const router = express.Router();


router.post('/add', upload.array('images', 10), async (req, res) => {
  console.log("add  calling.......");
  
    try {
        const { title, description, price} = req.body;
        const imagePaths = req.files.map(file => `/uploads/${file.filename}`);
        const product= new Product({
            title,
            description,
            images: imagePaths,
            price,
           
        });

        await product.save();
        res.status(201).json(product);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


router.get('/fetch', async (req, res) => {
    const products = await Product.find()
    res.json(products);
});

router.get('/fetch/:id', async (req, res) => {
  const product = await Product.findById(req.params.id)
  res.json(product);
});


module.exports = router;
