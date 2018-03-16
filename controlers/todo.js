
/*
THIS FILE GETS ALL OF THE FUNCTION FOR TODO FROM THE FOLDER ./TODO AND EXPORTS THEM TO routerTodo 
AND SERVE AS CONTROLERS FOR TODO
*/


//importhing all functions from ./todo folder
const createTodo = require('./todo/createTodo')
const getTodos = require('./todo/getTodos')
const getTodoById = require('./todo/getTodoById')
const deleteTodoById = require('./todo/deleteTodoById')
const updateTodoById = require('./todo/updateTodoById')
const finishTodo = require('./todo/finishTodo')
const getFinishedTodos = require('./todo/getFinishedTodos')
const getUnFinishedTodos = require('./todo/getUnFinishedTodos')
const deleteTodos = require('./todo/deleteTodos')

//exporthing all functions to todoRouter

module.exports.createTodo = createTodo
module.exports.getTodos = getTodos 
module.exports.getTodoById = getTodoById
module.exports.deleteTodoById = deleteTodoById
module.exports.updateTodoById = updateTodoById
module.exports.finishTodo = finishTodo
module.exports.getFinishedTodos = getFinishedTodos
module.exports.getUnFinishedTodos = getUnFinishedTodos
module.exports.deleteTodos = deleteTodos

