const Cart = require('../models/cart.model');

module.exports.findAllCarts = (req,res) => {
  Cart.find()
    .then((allCarts) => {
      console.log(allCarts);
      res.json({carts : allCarts});
    })
    .catch((err) => res.status(400).json(err));
}

module.exports.findCart = (req, res) => {
  Cart.findOne({_id:req.params.id})
    .then(cart => {res.json(cart)})
    .catch((err) => res.status(400).json(err));
}

module.exports.createCart = (req, res) => {
  Cart.create(req.body)
    .then(cart => res.json(cart))
    .catch((err) => res.status(400).json(err));
}

module.exports.updateCart = (req, res) => {
  Cart.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
    .then(cart => {
      console.log(cart);
      res.json(cart);
    })
    .catch((err) => res.status(400).json(err));
}

module.exports.deleteCart = (req, res) => {
  Cart.deleteOne({_id: req.params.id})
    .then(cart => res.json(cart))
    .catch((err) => res.status(400).json(err));
}