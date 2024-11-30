const jwt = require('jsonwebtoken');
const User= require("../model/UserModel")

const authenticate = async (req, res, next) => {
    console.log(req.header('Authorization'))
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) return res.status(401).json({ error: 'Authentication required' });

    try {
        const decoded = jwt.verify(token, 'your_secret_key');
        console.log(decoded)
        req.user = await User.findById(decoded.id);
        if (!req.user) throw new Error();
        next();
    } catch (err) {
        res.status(401).json({ error: 'Invalid token' });
    }
};

module.exports = authenticate;
