const express = require('express');
const app = express();
const port = 3000;
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');
const cartRouter = require('./routes/cart');

app.use(express.json());
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/cart', cartRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
}); 