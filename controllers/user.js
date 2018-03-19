/**
 * This file gets importd in the user routes
 * Also there is no need for try catch in any of the promises
 * because we use express-router-promise
 * that does the work automaticly
 */

const User = require('../models/schema/user')
module.exports = {
    //This is for development purpose
    getAllUsers: async (req,res,next) => {
        const users = await User.find({})
        return res.json(users)
    },
    //Get user with id that is checked by middleware if it is valid and stored in req.value.params.userId
    getUserById: async (req,res,next) => {
        const {userId} = req.value.params
        const user = await User.findById(userId) 
        if(!user) return res.status(400).send('No user with that specific id')
        return res.status(200).json(user)
    },

    //Working with update where you need to provide all of the fields
    replaceUser: async (req,res,next) => {
        const {userId} = req.value.params
        const userBody = req.value.body
        const user = await User.findOneAndUpdate(userId,userBody,{new:true})
        if(!user) return res.status(400).send('No user with that specific id')
        return res.json({success:true})
    },
    //working with patch where you need to provide only the field that you want to update
    updateUser: async (req,res,next) => {
        const {userId} = req.value.params
        const newUser = req.value.body
        const user = await User.findOneAndUpdate(userId,newUser,{new:true})
        if(!user) return res.status(400).send('No user with that specific id')
        return res.json(user)
       },
    //If you want to delete user you need to provide the email and passowrd again in the body
    deleteUser: async (req,res,next) => {
        const {userId} = req.value.params
        await User.findByIdAndRemove(userId)
        return res.sendStatus(200)
    }
}