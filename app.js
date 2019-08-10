const express = require('express');
const path = require('path');
const methodOverride = require('method-override');

// const session = require('express-session');
const createError = require('http-errors');
const logger = require('morgan');

const apiRoutes = require('./routes/api');
const webRoutes = require('./routes/web');


const app = express();
app.disable('x-powered-by');

app.use(methodOverride('_method'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
// app.use(session({ secret: 'secret', resave: true, saveUninitialized: true }));

app.use('/api/v1/', apiRoutes);
app.use('/', webRoutes);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
