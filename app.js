var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const homeRouter = require('./routes/homeRoutes');
const genresRouter = require('./routes/genresRoutes');
const seriesXgenreRouter = require('./routes/seriesXgenreRoutes');
const searchRouter = require('./routes/searchRoutes');
const detailRouter = require('./routes/detailRoutes');
const usuariosRouter = require('./routes/usuariosRoutes');
const reviewsRouter = require('./routes/reviewsRoutes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/home', homeRouter);
app.use('/genres', genresRouter);
app.use('/seriesXgenre', seriesXgenreRouter);
app.use('/search', searchRouter);
app.use('/detail', detailRouter);
app.use('/usuarios', usuariosRouter);
app.use('/reviews', reviewsRouter);

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
