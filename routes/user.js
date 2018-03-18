const express = require('express')
const router = require('express-promise-router')()
const user = require('../controllers/user')
const {validateParam, schemas} = require('../helpehrs/routeHelpers')

router.route('/')
    .get(user.getAllUsers)
    .post(user.createUser)


router.route('/:userId')
    .get(validateParam(schemas.idSchema,'userId'),user.getUserById)
    .put(user.replaceUser)
    // .patch(user.updateUser)

router.route('/:userId/todos')
    .get(user.getUserTodos)
    .post(user.createUserTodo)

    


    
module.exports = router

