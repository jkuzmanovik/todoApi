const Todo = require('../../models/schema/todoSchema.js')

module.exports = (req,res,next) => {
    Todo.find({},(err,todos) => {
        if(err) return next(err)
        res.json(todos)
    })
}

