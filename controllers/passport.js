const passport = require('passport')
const jwtStrategy = require('passport-jwt').Strategy
const localStrategy = require('passport-local').Strategy
const {ExtractJwt}  =require('passport-jwt')
const {jwtSecret} = require('../configuration/configuration')
const User = require('../models/schema/user')

//JSON WEB TOKEN STRATEGY
passport.use(new jwtStrategy({
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: jwtSecret
},async (payload,done) => {
        try{
            const user = await User.findById(payload.sub)
            //if user doesn't exists,handle it
            if(!user) return done(null,false)

            done(null,user)

        }catch(err){
            done(err,false)
        }
    }
))
//Middleare for checking if credentials are correct (email and password)
passport.use(new localStrategy({
    usernameField: 'email'
    },async (email,password,done) => {
            try{
            const user = await User.findOne({email}) 
            if(!user) return done(null,false)
            const isMatch = await user.comparePassword(password)
            

            if(!isMatch)
                return done(null,false)
            done(null,true)
            }catch(err){
                done(err,false)
            }
        }
    ))


