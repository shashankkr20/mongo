const express = require('express');
const router = express.Router();
const Product = require('../schema/product');

router.post('/', async (req, res) => {
  try {
    const { name } = req.body;

    // Validate required fields
    if (!name) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Check if the product already exists based on unique criteria (e.g., name)
    const existingProduct = await Product.findOne({ name });
    if (existingProduct) {
      return res.status(400).json({ error: 'Product with this name already exists' });
    }

    // Create a new product
    const newProduct = await Product.create(req.body);

    // Send success response
    res.status(201).json({ message: 'Product added successfully', product: newProduct });
  } catch (err) {
    console.error('Error adding product:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
