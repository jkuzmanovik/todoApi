const User = require ('../models/schema/userSchema.js')
const mongoose = require ('mongoose')

module.exports.createUser = (req,res,next) => {
    const newUser = new User(req.body)
    newUser.save((err,user) => {
        if(err) return next(err) 
        return res.sendStatus(200)
    })
}

module.exports.getAllUsers = (req,res,next) => {
    User.find({},(err,users) => {
        if(err) return next(err)
        return res.json(users)
    })
}

module.exports.deleteAllUsers = (req,res,next) => {
    User.remove({},(err) => {
        if(err) return next(err)
        return res.sendStatus(200)
    })


}



