const Todo = require('../../models/schema/todoSchema.js')
module.exports = (req,res,next) => {
    Todo.find({isFinished:false},(err,todos) => {
        if(err) return next(err)
        return res.json(todos)
    })
}

