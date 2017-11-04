const express = require('express');
const path = require('path');
const routes = require('./routes/index');
const logger = require('morgan');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('localhost:27017/library');

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(routes);

app.listen(3000, () => {
  console.log('youhouuu!');
});
