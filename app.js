const express = require('express')
const mongoose = require('mongoose')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const todo = require('./controlers/todo.js')
var app = express()


//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

mongoose.connect('mongodb://localhost:5000');
//GET MIDDLEWARE

app.get('/todos',todo.getAllTodos)
app.get('/todo/:id',todo.getTodoById)
app.get('/todos/finished',todo.getFinishedTodos)
app.get('/todos/unfinished',todo.getUnFinishedTodos)


//POST MIDDLEWARE
app.post('/todo',todo.createTodo)

//PUT MIDDLEWARE
app.put('/todo/:id',todo.updateTodoById)
app.put('/todo/finished/:id',todo.updateIsFinished)

//DELETE MIDDLEWARE

app.delete('/todo/:id',todo.delteTodoById)
app.delete('/todos/deleteall',todo.deleteAllTodos)


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

app.listen(3000,() => {console.log('listening on port 3000')})

module.exports = app
