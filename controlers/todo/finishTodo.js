const Todo = require('../../models/schema/todoSchema.js')
module.exports = (req,res,next) => {
    Todo.findById(req.params.id,(err,todo) => {
        todo.isFinished = !todo.isFinished
        todo.save((err,todo) => {
            if(err) return next(err)
            return res.json(todo)
        })
    })
}

