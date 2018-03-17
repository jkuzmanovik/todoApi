const express = require('express')
const jwtValidate = require('../controlers/jwtValidate')
const auth = require('../controlers/auth')
const user = require('../controlers/user')
const app = express()

app.post('/login',auth.loginUser)
app.post('/user',user.createUser)
app.use(jwtValidate.getToken)
app.use(jwtValidate.validateToken)


module.exports = app





