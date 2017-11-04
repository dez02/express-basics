const express = require('express');
const books = require('./books');

const router = express.Router();
router.get('/', (req, res) => res.render('homepage'));

router.use(books);

module.exports = router;
