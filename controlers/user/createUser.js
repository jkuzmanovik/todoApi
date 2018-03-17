const User = require ('../../models/schema/userSchema.js')
const bcrypt  = require('bcryptjs')

var salt = bcrypt.genSaltSync(10);

module.exports = (req,res,next) => {

    var userData = []

    //validate userName
    if(typeof req.body.userName!== 'string')
        return res.status(400).send('missing userName')
    userData.userName = req.body.userName

    //validate email
    if(typeof req.body.email !== 'string')
        return res.status(400).send('Missing Email')
    if(req.body.email)
        if(!(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(req.body.email))
            return res.status(400).send('Invalid Email')
        else
            userData.email = req.body.email

    //validate PhoneNumber
    if(typeof req.body.phoneNumber !=='string')
        return res.status(400).send('invalid phoneNumber')
    if(req.body.phoneNumber)
        if(!(/^\d{3}-\d{3}-\d{4}$/gm).test(req.body.phoneNumber))
            return res.status(400).send('Phone number must be 10 digit')
        else
            userData.phoneNumber = req.body.phoneNumber

    
    //validate password and hash it
    if(!req.body.password)
        return res.status(400).send('Missing password')

    if(req.body.password && typeof req.body.password !== 'string')
        return res.status(400).send('Invalid passowrd')
    else
        userData.hash = bcrypt.hashSync(req.body.password, salt);

    //check if firstName is provied and add it to the userData
    if(req.body.firstName && typeof req.body.firstName !== 'string')
        return res.status(400).send('invalid firstName')
    if(req.body.firstName)
        userData.firstName = req.body.firstName

    //check if lastName is provided and add it to the userData
    if(req.body.lastName && typeof req.body.lastName!== 'string')
        return res.status(400).send('invalid lastName')
    if(req.body.lastName)
        userData.lastName = req.body.lastName

   var newUser = new User(userData)

    newUser.save((err,user) => {
        if(err) {
            if(err.code === 11000)
                return res.status(400).send('Username,Email or Phone alrady used')
            return next(err)
        }
        return res.sendStatus(200)
    })
}