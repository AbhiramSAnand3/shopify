// models/CartModel.js
const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    productId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Product' },
    quantity: { type: Number, required: true, min: 1 },
}, { timestamps: true });

const Cart = mongoose.model('Cart', cartItemSchema);

module.exports = Cart;
