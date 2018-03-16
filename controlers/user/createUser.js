const User = require ('../../models/schema/userSchema.js')
module.exports = (req,res,next) => {
    const newUser = new User(req.body)
    newUser.save((err,user) => {
        if(err) return next(err) 
        return res.sendStatus(200)
    })
}