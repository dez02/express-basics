const Book = require('../models/book');

class BooksController {
  static list(req, res) {
    Book.find((error, books) => res.render('books/list', { books }));
  }
}

module.exports = BooksController;
