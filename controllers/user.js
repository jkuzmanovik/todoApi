/**
 * This file gets importd in the user routes
 * Also there is no need for try catch in any of the promises
 * because we use express-router-promise
 * that does the work automaticly
 */


const User = require('../models/schema/user')
module.exports = {
    getAllUsers: async (req,res,next) => {
        const users = await User.find({})
        return res.json(users)
    },
    getUserById: async (req,res,next) => {
        const {userId} = req.value.params
        const user = await User.findById(userId) 
        if(!user) return res.status(400).send('No user with that specific id')
        return res.status(200).json(user)
    },

    //Not working because mongoose schmea defined everything to be unique
    //TODO: fix it 
    replaceUser: async (req,res,next) => {
        const {userId} = req.value.params
        const userBody = req.value.body
        console.log(userBody)
        const user = await User.findOneAndUpdate(userId,userBody,{new:true})
        if(!user) return res.status(400).send('No user with that specific id')
        return res.json({success:true})
    },
    updateUser: async (req,res,next) => {
        const {userId} = req.value.params
        const newUser = req.value.body
        const user = await User.findOneAndUpdate(userId,newUser,{new:true})
        if(!user) return res.status(400).send('No user with that specific id')
        return res.json(user)
       },
}