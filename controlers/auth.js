const user = require('../models/schema/userSchema')
const jwt = require('jsonwebtoken')
const config = require('../models/config')


module.exports.loginUser = (req,res,next) => {

    user.findOne({email:req.body.email},(err,user) => {
        if(err) return next(err)
        if(!user) return res.status(400).send('No user with that email')

       jwt.sign({user},config.secret,{expiresIn: '30s'},(err,token) => {
            if(err) return next(err)
            res.json({token:token})
       })
    })
}











