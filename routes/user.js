const express = require('express')
const router = require('express-promise-router')()
const user = require('../controllers/user')
const todo = require('../controllers/todo')
const auth = require('../controllers/auth')
const todoRoutes = require('./todo')
const passport = require('passport')
const passportConf = require('../controllers/passport')
const {validateParam,validateBody, schemas} = require('../helpers/routeHelpers')
const authenticate = passport.authenticate('jwt',{session:false})
const passwordLogin = passport.authenticate('local',{session:false})

//middleware
router.use(authenticate)
router.route('/')
    .get(user.getAllUsers)

//validate parameter for every request that come with userId
router.use('/:userId',validateParam(schemas.idSchema,'userId'),auth.checkIfRealUser)
// /userId routes
router.route('/:userId')
    .get(user.getUserById)
    .put(validateBody(schemas.signupSchema),user.replaceUser)
    .patch(validateBody(schemas.userOptionalSchema),user.updateUser)
    .delete(validateBody(schemas.logInSchema),passwordLogin,user.deleteUser)
    
//dispatch to todo router
router.use('/:userId/todos',todoRoutes)
    
    
module.exports = router

