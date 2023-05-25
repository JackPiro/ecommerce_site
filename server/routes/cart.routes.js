const CartController = require('../controllers/cart.controller');
module.exports = (app) => {
  app.get('/api/', CartController.findAllCarts);
  app.get('/api/:id', CartController.findCart);
  app.post('/api/cart', CartController.createCart);
  app.put('/api/:id', CartController.updateCart);
  app.delete('/api/:id', CartController.deleteCart);
}