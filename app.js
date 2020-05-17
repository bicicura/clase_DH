var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const pagina1Router = require('./routes/pagina1');
const pagina2Router = require('./routes/pagina2');
const pagina3Router = require('./routes/pagina3');
const pagina4Router = require('./routes/pagina4');
const pagina5Router = require('./routes/pagina5');
const pagina6Router = require('./routes/pagina6');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/pagina1', pagina1Router);
app.use('/pagina2', pagina2Router);
app.use('/pagina3', pagina3Router);
app.use('/pagina4', pagina4Router);
app.use('/pagina5', pagina5Router);
app.use('/pagina6', pagina6Router);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
