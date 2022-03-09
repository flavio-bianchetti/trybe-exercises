const express = require('express');
const { Book } = require('../models');
const router = express.Router();

router.get('/', (_req, res) => {
  try {
    const books = Book.findAll();
    return res.status(200).json(books);
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: 'Algo deu errado',
    });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (!book) {
      return res.status(404).json({
        message: 'Livro não encontrado',
      });
    }
    return res.status(200).json(book);
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: 'Algo deu errado',
    });
  }
});

router.post('/', async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const book = await Book.create({
      title,
      author,
      pageQuantity,
    });

    return res.status(201).json(book);
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: 'Algo deu errado',
    });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (!book) {
      return res.status(404).json({
        message: 'Livro não encontrado',
      });
    }

    const { title, author, pageQuantity } = req.body;
    await book.update({
      title,
      author,
      pageQuantity,
    });

    return res.status(200).json(book);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: 'Algo deu errado',
    });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (!book) {
      return res.status(404).json({
        message: 'Livro não encontrado',
      });
    }

    await book.destroy();

    return res.status(204).json();
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: 'Algo deu errado',
    });
  }
});

module.exports = router;