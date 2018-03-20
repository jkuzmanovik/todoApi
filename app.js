const express = require('express')
const mongoose = require('mongoose')
const favicon = require('serve-favicon')
const logger = require('morgan')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000
const app = express()
const User = require('./routes/user')
const Auth = require('./routes/auth')
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//MIDDLEWARE
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:5000')

//ROUTES
app.get('/', (req,res,nex) =>  {return res.send('working')})
app.use(Auth)
app.use('/user',User)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))

module.exports = app
