const express = require('express')
const router = require('express-promise-router')()
const user = require('../controllers/user')

router.route('/')
    .get(user.getAllUsers)
    .post(user.createUser)


router.route('/:userId')
    .get(user.getUserById)
    .put(user.replaceUser)
    // .patch(user.updateUser)

router.route('/:userId/todos')
    .get(user.getUserTodos)
    .post(user.createUserTodo)

    


    
module.exports = router

