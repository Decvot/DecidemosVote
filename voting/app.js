const env = require('dotenv')
env.config({ path: './config.env' });
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


const bureauxRouter = require('./routes/bureaux');
const regionRouter = require('./routes/region');
const cantonRouter = require('./routes/canton')
const departementRouter = require('./routes/departement')
const paystRouter = require('./routes/pays')
const communeRouter = require('./routes/commune')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.use('/bureaux',bureauxRouter);
app.use('/region',regionRouter);
app.use('/canton',cantonRouter);
app.use('/commune',communeRouter);
app.use('/departement',departementRouter);
app.use('/pays',paystRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development9*777777777777777
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
