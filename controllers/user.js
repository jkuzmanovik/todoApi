const User = require('../models/schema/user')
const Todo = require('../models/schema/todo')
module.exports = {
    getAllUsers: async (req,res,next) => {
        const users = await User.find({})
        return res.json(users)
    },
    createUser: async (req,res,next) => {
        const newUser = new User(req.body)
        const user =  await newUser.save()
        return res.status(201).json(user)
    },
    getUserById: async (req,res,next) => {
        const {userId} = req.params
        const user = await User.findById(userId) 
        return res.status(200).json(user)
    },
    replaceUser: async (req,res,next) => {
        const {userId} = req.params
        const userBody = req.body
        const newUser = await User.findByIdAndUpdate(userId,userBody,{new:true})
        return res.json(newUser)
    },
    getUserTodos: async (req,res,next) => {
        const {userId} = req.params
        const user = await User.findById(userId).populate('todos')
        return res.json(user.todos)
            

    },
    createUserTodo: async (req,res,next) => {
        const {userId} = req.params
        const newTodo = new Todo(req.body)
        const user = await User.findById(userId)
        newTodo.user = user
        await newTodo.save()
        user.todos.push(newTodo)
        await user.save()
        return res.json(newTodo)
    }

    
}