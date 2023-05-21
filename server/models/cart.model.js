const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
  productId: {
    type: Number,
    required: [true, 'You must choose a product to add to the cart']
  },
  quantity: {
    type: Number,
    required: [true, 'You must have at least 1 of an item you wish to add'],
    min: [1, 'You must have at least 1 of an item you wish to add']
  }
}, {timestamps: true});

module.exports = mongoose.model('Cart', CartSchema);