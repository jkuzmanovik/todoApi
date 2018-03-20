const User = require('../models/schema/user')
const Todo = require('../models/schema/todo')
module.exports = {
     getUserTodos: async (req,res,next) => {
        const {userId} = req.value.params
        const user = await User.findById(userId).populate('todos')
        if(!user) return res.status(400).send('No user with that specific id')
        return res.json(user.todos)
    },

    createUserTodo: async (req,res,next) => {
        const {userId} = req.value.params
        const newTodo = new Todo(req.value.body)
        const user = await User.findById(userId)
        if(!user) return res.status(400).send('No user with that specific id')
        newTodo.user = user._id
        await newTodo.save()
        user.todos.push(newTodo._id)
        await user.save()
        return res.json(newTodo)
    },
    getTodo: async (req,res,next) => {
        const {todoId} = req.value.params
        const todo = await Todo.findById(todoId)
        if(!todo) return res.status(400).send('incorrect id')
        return res.status(200).json({todo})
    },
    //BUG FOR REPLACING USERS, PASSWORD REPLACE IN PLAIN TEXT
    replaceTodo: async (req,res,next) => {
        const {todoId} = req.value.params
        const todoBody = req.value.body
        const todo = await Todo.findOneAndUpdate(todoId,todoBody,{new:true})
        if(!todo) return res.status(400).send('No todo with that specific id')
        return res.json(todo)
    },
    updateTodo: async (req,res,next) => {
        const {todoId} = req.value.params
        const todoBody = req.value.body
        const todo = await Todo.findOneAndUpdate(todoId,todoBody,{new:true})
        if(!todo) return res.status(400).send('No todo with that specific id')
        return res.json(todo)
    },
    deleteTodo: async (req,res,next) => {
        const {todoId} = req.value.params
        await Todo.findOneAndRemove(todoId)
        return res.sendStatus(200)
    },
    updateFinished: async (req,res,next) => {
        const {todoId} = req.value.params
        const todo = await Todo.findById(todoId)
        todo.isFinished = !todo.isFinished
        await todo.save()
        return res.sendStatus(200)
    }
}