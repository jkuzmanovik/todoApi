const user = require('../models/schema/userSchema')
const jwt = require('jsonwebtoken')
const config = require('../models/config')


module.exports.loginUser = (req,res,next) => {

    if(!req.body.email)
        return res.status(400).send('No email provided')
    if(!req.body.password)
        return res.status(400).send('No password provided')

    user.findOne({email:req.body.email},(err,user) => {
        if(err) return next(err)
        if(!user) return res.status(400).send('No user with that email')
        if(!user.comparePassword(req.body.password))
            return res.status(400).send('Incorrect password')
       jwt.sign({user},config.secret,{expiresIn: '30m'},(err,token) => {
            if(err) return next(err)
            res.json({token:token})
       })
    })
}
