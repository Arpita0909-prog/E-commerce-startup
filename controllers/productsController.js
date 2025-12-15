const path = require('path');

const productServices = require('../services/productsServices');

const getProducts = (req, res) => {
  productServices.getAllProducts();
  res.sendFile(path.join(__dirname, '..', 'views', 'products.html'));
}

const getProductById = (req, res) => {
  res.send(productServices.getProductById(req.params.id));
} 

const postProduct = (req, res) => {
  res.send(productServices.addProduct());
}

module.exports = {
  getProducts,
  getProductById,
  postProduct
};