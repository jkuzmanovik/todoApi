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
    }
}