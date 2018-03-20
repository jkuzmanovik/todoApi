const express = require('express')
const router = require('express-promise-router')()
const todo = require('../controllers/todo')
const {validateParam,validateBody, schemas} = require('../helpers/routeHelpers')
const validateTodoId = validateParam(schemas.idSchema,'todoId')

router.route('/')
    .get(todo.getUserTodos)
    .post(validateBody(schemas.todoSchema),todo.createUserTodo)

router.use('/:todoId',validateTodoId)

router.route('/:todoId')    
    .get(todo.getTodo)
    .put(validateBody(schemas.todoSchema),todo.replaceTodo)
    .patch(validateBody(schemas.todoOptionalSchema),todo.updateTodo)
    .delete(todo.deleteTodo)

router.route('/:todoId/finish')
//here put and patch will do the same thing
//but it depends how you want to make the request with patch or put id doesn't matter
    .put(validateBody(schemas.todoOptionalSchema),todo.updateFinished)
    .patch(validateBody(schemas.todoOptionalSchema),todo.updateFinished)



module.exports = router