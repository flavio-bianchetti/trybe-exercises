const express = require('express');
const ProductModel = require('../models/productModel');
const ProductService = require('../services/productService');

const router = express.Router();

router.get('/', async (_req, res, _next) => {
  try {
    const products = await ProductService.getAll();
    return res.status(200).json(products);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const product = await ProductService.getById(req.params.id);

    if (!product) return res.status(404).json({ error: 'Product not found' });
    return res.status(200).json(product);

  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/', async (req, res) => {
  const { name, brand } = req.body;
  try {
    const newProduct = await ProductService.add(name, brand);
    return res.status(201).json(newProduct);

  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const product = await ProductService.exclude(req.params.id);

    if (JSON.stringify(product) === '{}') return res.status(404).json({ error: 'Product not found' });

    return res.status(200).json(product);

  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

router.put('/:id', async (req, res) => {
  const { name, brand } = req.body;
  try {
    const product = await ProductService.update(req.params.id, name, brand);

    if (JSON.stringify(product) === '{}') return res.status(404).json({ error: 'Product not found' });
    return res.status(200).json({id: req.params.id, name, brand});

  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;