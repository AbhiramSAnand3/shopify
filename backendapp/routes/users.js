const express = require('express');
const jwt = require('jsonwebtoken');
const User= require('../model/UserModel')
const router = express.Router();

// Signup
router.post('/signup', async (req, res) => {
    try {
        console.log(req.body)
        const { name, email, password } = req.body;
        const user = new User({ name, email, password });
        await user.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        console.log(user)
        if (!user || !(await user.comparePassword(password))) {
            throw new Error('Invalid email or password');
        }
        const token = jwt.sign({ id: user._id }, 'your_secret_key', { expiresIn: '900s' });
        res.json({ token });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
