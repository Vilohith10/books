const express = require('express');
const router = express.Router();
const Book = require('./bookSchema');

// Create a new book
router.post('/addbook', async (req, res) => {
  const { title, author, summary } = req.body;
  const book = new Book({ title, author, summary });
  await book.save();
  res.status(201).json(book);
});

// Get a list of all books
router.get('/', async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

// Get details of a specific book by its ID
router.get('/:id', async (req, res) => {
  const book = await Book.findById(req.params.id);
  console.log("books--------------->",book)
  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }
  res.json(book);
});

// Update a book's details
router.put('/:id', async (req, res) => {
  const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }
  res.json(book);
});

// Delete a book
router.delete('/:id', async (req, res) => {
  const book = await Book.findByIdAndRemove(req.params.id);
  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }
  res.json(book);
});

module.exports = router;
