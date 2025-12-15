 const productServices = require('../services/productsServices');

const getProducts = (req, res) => {
  res.send(productServices.getAllProducts());
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