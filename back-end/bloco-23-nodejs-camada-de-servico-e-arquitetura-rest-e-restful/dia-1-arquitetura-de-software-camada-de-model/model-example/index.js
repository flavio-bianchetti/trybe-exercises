// index.js

const express = require('express');

const bodyParser = require('body-parser');

const Author = require('./models/Author');
const Book = require('./models/Book');

const app = express();

app.use(bodyParser.json());

app.get('/authors', async (_req, res) => {
    const authors = await Author.getAll();

    res.status(200).json(authors);
});

app.get('/books', async (_req, res) => {
    const books = await Book.getAll();

    res.status(200).json(books);
});

app.get('/books/:id', async (req, res) => {
    const { id } = req.params;
    const books = await Book.findBooksByAuthorId(id);

    if (!books) return res.status(404).json({ message: 'Book not found' });

    res.status(200).json(books);
});

app.post('/authors', async (req, res) => {
    const { first_name, middle_name, last_name } = req.body;

    if (!Author.isValid(first_name, middle_name, last_name)) {
        return res.status(400).json({ message: 'Dados inválidos' });
    }

    await Author.create(first_name, middle_name, last_name);

    res.status(201).json({ message: 'Autor criado com sucesso! '});
});

app.post('/books', (req, res) => {
  const { title, author_id } = req.body;
  if (Book.add(title, author_id)) {
    return res.status(201).json({ message: 'Livro criado com sucesso!' });
  }
  return res.status(400).json({ message: 'Dados inválidos' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});
