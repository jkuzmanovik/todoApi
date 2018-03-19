const express = require('express')
const router = require('express-promise-router')()
const user = require('../controllers/user')
const todo = require('../controllers/todo')
const auth = require('../controllers/auth')

const {validateParam,validateBody, schemas} = require('../helpers/routeHelpers')

router.route('/')
    .get(user.getAllUsers)


router.route('/:userId')
    .get(validateParam(schemas.idSchema,'userId'),user.getUserById)
    .put([validateParam(schemas.idSchema,'userId'),validateBody(schemas.signupSchema)],user.replaceUser)
    .patch([validateParam(schemas.idSchema,'userId'),validateBody(schemas.userOptionalSchema)],user.updateUser)

router.route('/login')
    .post(validateBody(schemas.logInSchema),auth.login)

router.route('/signup')
    .post(validateBody(schemas.signupSchema),auth.signup)


    
router.route('/:userId/todos')
    .get(validateParam(schemas.idSchema,'userId'),todo.getUserTodos)
    .post([validateParam(schemas.idSchema,'userId'),validateBody(schemas.todoSchema)],todo.createUserTodo)


    
module.exports = router

