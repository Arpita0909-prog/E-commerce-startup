const getCartForUser = (req, res) => {
  res.send(`Fetching cart for user with ID: ${req.params.userid}`);
}

const addProductToCart = (req, res) => {
  res.send(`Adding product with ID: ${req.body.productId} to cart for user with ID: ${req.params.userid}`);
}

module.exports = {
  getCartForUser,
  addProductToCart
};