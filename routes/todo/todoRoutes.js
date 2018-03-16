/*
    THIS FILE GETS IMPORTED IN APP.JS 
    AND SERVER AS ROUTES FOR TODOS
*/
const todo = require('../../controlers/todo')
const express=  require('express')
const app = express()


app.get('/todo/finished',todo.getFinishedTodos)
app.get('/todo/unfinished',todo.getUnFinishedTodos)
app.route('/todo')
    .get(todo.getTodos)
    .post(todo.createTodo)
    .delete(todo.deleteTodos)

app.route('/todo/:id')
    .get(todo.getTodoById)
    .put(todo.updateTodoById)
    .delete(todo.deleteTodoById)

app.put('/todo/finish/:id',todo.finishTodo)

module.exports = app






