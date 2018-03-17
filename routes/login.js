const express = require('express')
const jwtValidate = require('../controlers/jwtValidate')
const auth = require('../controlers/auth')

const app = express()

app.post('/login',auth.loginUser)
app.use(jwtValidate.getToken)
app.use(jwtValidate.validateToken)


module.exports = app





