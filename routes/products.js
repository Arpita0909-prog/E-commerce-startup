const epress = require('express');
const router = epress.Router();
const productsController = require('../controllers/productsController');

router.get('/', productsController.getProducts);

router.get('/:id', productsController.getProductById);

router.post('/', productsController.postProduct);

module.exports = router;