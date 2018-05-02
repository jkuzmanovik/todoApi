/*
AUTHENTICATION CONTROLLERS FOR
SIGN UP USERS AND LOGIN USERS
*/
const jwt =  require('jsonwebtoken')
const User = require('../models/schema/user')
const {jwtSecret} = require('../configuration/configuration')
const {ExtractJwt}  =require('passport-jwt')


//function for creating token
signToken = user => {
    return jwt.sign({
        iss: 'todoApi',
        sub: user._id,
        iat: new Date().getTime(),
        exp: new Date().setDate(new Date().getDate() + 1)
    },jwtSecret)
}

module.exports = {
    login: async (req,res,next) => {
        const {email} = req.value.body
        //check if user already exists
        const user = await User.findOne({email})
        if(!user) return res.status(400).send('No user with that email')
        const token =  await signToken(user)
        //return new token
        return res.status(200).json({token:token,userId:user.id})

    },

    signup: async (req,res,next) => {
        const {email,userName} = req.value.body
        if(await User.findOne({email}))
            return res.status(400).send('Email  already exists')
        if(await User.findOne({userName}))
            return res.status(400).send('userName already exists')
        const newUser = new User(req.value.body)
        await newUser.hashPassword()
         await newUser.save()
        const token = signToken(newUser) 
        return res.status(200).json({token:token,userId:newUser.id})
    },
    checkIfRealUser: async (req,res,next) => {
        const {userId} = req.params
        const jwtFromRequest = req.get('authorization')
        const decodedJWT = jwt.decode(jwtFromRequest)
        if(userId !== decodedJWT.sub)
            return res.status(400).send('unauthorized')
        next()
    }
}