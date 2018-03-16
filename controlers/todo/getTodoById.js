const Todo = require('../../models/schema/todoSchema.js')
module.exports = (req,res,next) => {
    Todo.findById(req.params.id,(err,todo) => {
        if(err) return next(err)
        if(!todo) return res.send('no coupon with that id')
        return res.json(todo)
    })
}

