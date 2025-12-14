const express = require('express');
const router = express.Router();

router.get('/:userid', (req, res) => {
    res.send(`Fetching cart for user ID: ${req.params.userid}`);
});

router.post('/:userid/add', (req, res) => {
    res.send(`Adding item to cart for user ID: ${req.params.userid}`);
});

module.exports = router;