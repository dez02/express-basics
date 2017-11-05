const Book = require('../models/book');

class BooksController {
  static list(req, res) {
    Book.find((error, books) => {
      console.log(books);
      res.render('books/list', { books });
    });
  }
}

module.exports = BooksController;
