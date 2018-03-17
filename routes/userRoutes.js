const user = require('../controlers/user')
const express = require ('express')
const app = express()

app.route('/user')
    .get(user.getAllUsers)
    .delete(user.deleteAllUsers)
app.route('/user/:id')
    .get(user.findUserById)
    .put(user.updateUserById)
    .delete(user.deleteUserById)

module.exports = app