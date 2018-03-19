const express = require('express')
const router = require('express-promise-router')()
const auth = require('../controllers/auth')
const passport = require('passport')
const {validateBody, schemas} = require('../helpers/routeHelpers')

const passwordLogin = passport.authenticate('local',{session:false})
router.route('/login')
    .post(validateBody(schemas.logInSchema),passwordLogin,auth.login)

router.route('/signup')
    .post(validateBody(schemas.signupSchema),auth.signup)
module.exports = router
