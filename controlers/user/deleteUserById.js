const User = require ('../../models/schema/userSchema.js')
module.exports = (req,res,next) => {
    User.findByIdAndRemove(req.params.id,(err,user) => {
        if(err) return next (err)
        if(!user) return res.status(400).send('No user with that id')
        res.sendStatus(200)
    })
}
