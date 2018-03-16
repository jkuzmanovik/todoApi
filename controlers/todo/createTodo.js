const Todo = require('../../models/schema/todoSchema.js')
module.exports = (req,res,next) => {
    const newTodo = new Todo(req.body)
    newTodo.save((err,coupon) => {
        if(err) return next(err)
        res.sendStatus(200)
    })
}