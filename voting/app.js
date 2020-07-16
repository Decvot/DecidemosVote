const env = require('dotenv')
env.config({ path: './config.env' });
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const bureauxRouter = require('./routes/bureaux')
const commune = require('./models/communes')
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
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/bureaux',bureauxRouter);
app.use('/commune',async (req,res,next)=>{
  try {
    const doc = await commune.find().populate('bureaux');
  
  

   if (!doc) throw 'no document found';

   res.status(200).json({
     status: 'success',
     data: {
       doc,
     },
   });
 } catch (err) {
   res.status(400).json({
     status: 'fail',
     message: err,
   });
 }
  
})
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
