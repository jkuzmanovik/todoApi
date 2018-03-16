const User = require ('../../models/schema/userSchema.js')

module.exports = (req,res,next) => {
    User.find({},(err,users) => {
        if(err) return next(err)
        return res.json(users)
    })
}

