const User = require ('../../models/schema/userSchema.js')
module.exports = (req,res,next) => {
    User.findByIdAndUpdate(req.params.id,req.body,(err,user) => {
        if(err) return next(err)
        return res.json(user)
    })
}