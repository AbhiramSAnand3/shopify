// routes/cart.js
const express = require('express');

const Cart = require('../model/CartModel');
const authenticate = require('../middlewares/auth');
const router = express.Router();
// Add item to cart
router.post('/add', authenticate, async (req, res) => {
    const { productId, quantity } = req.body;
    try {
        const existingItem = await Cart.findOne({ userId: req.user._id, productId });
        if (existingItem) {
            existingItem.quantity += quantity; // Update quantity if exists
            await existingItem.save();
            return res.json(existingItem);
        }

        const newItem = new Cart({ userId: req.user._id, productId, quantity });
        await newItem.save();
        res.status(201).json(newItem);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add item to cart' });
    }
});

// Get user's cart items
router.get('/', authenticate, async (req, res) => {
    try {
        const cartItems = await Cart.find({ userId: req.user._id }).populate('productId');
        res.json(cartItems);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch cart items' });
    }
});

// Update item quantity
router.put('/update/:id', authenticate, async (req, res) => {
    const { quantity } = req.body;
    try {
        const item = await Cart.findById(req.params.id);
        if (!item || item.userId.toString() !== req.user._id.toString()) {
            return res.status(404).json({ error: 'Cart item not found' });
        }
        item.quantity = quantity;
        await item.save();
        res.json(item);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update item' });
    }
});

// Remove item from cart
router.delete('/remove/:id', authenticate, async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Failed to remove item from cart' });
    }
});

module.exports = router;
