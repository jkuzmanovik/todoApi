const express = require('express')
const router = require('express-promise-router')()
const user = require('../controllers/user')
const todo = require('../controllers/todo')

const {validateParam,validateBody, schemas} = require('../helpehrs/routeHelpers')

router.route('/')
    .get(user.getAllUsers)
    .post(validateBody(schemas.userSchema),user.createUser)


router.route('/:userId')
    .get(validateParam(schemas.idSchema,'userId'),user.getUserById)
    .put([validateParam(schemas.idSchema,'userId'),validateBody(schemas.userSchema)],user.replaceUser)
    .patch([validateParam(schemas.idSchema,'userId'),validateBody(schemas.userOptionalSchema)],user.updateUser)

router.route('/:userId/todos')
    .get(validateParam(schemas.idSchema,'userId'),todo.getUserTodos)
    .post([validateParam(schemas.idSchema,'userId'),validateBody(schemas.todoSchema)],todo.createUserTodo)


    
module.exports = router

