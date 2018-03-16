const User = require ('../../models/schema/userSchema.js')
module.exports = (req,res,next) => {
    User.remove({},(err) => {
        if(err) return next(err)
        return res.sendStatus(200)
    })
}

