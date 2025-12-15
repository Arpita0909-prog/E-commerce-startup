const path = require('path');

const productServices = require('../services/productsServices');

const getProducts = (req, res) => {
  productServices.getAllProducts();
  res.sendFile(path.join(__dirname, '..', 'views', 'products.html'));
}

const getProductById = (req, res) => {
  productServices.getProductById(req.params.id);
  res.sendFile(path.join(__dirname, '..', 'views', 'products.html'));
} 

const postProduct = (req, res) => {
  const data = req.body;
  productServices.addProduct(data);
  res.status(201).json({ value:data.productName });
}

module.exports = {
  getProducts,
  getProductById,
  postProduct
};