const express = require('express');
const books = require('../controllers/books');

const router = express.Router();

router.get('/books/list', books.list);

module.exports = router;
