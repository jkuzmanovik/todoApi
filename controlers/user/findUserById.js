const User = require ('../../models/schema/userSchema.js')
module.exports = (req,res,next) => {
    User.findById(req.params.id,(err,user) => {
    if(err) return next(err)
    if(!user) return res.status(400).send('No user with that id')
    return res.json(user)
    })
}
