const Todo = require('../../models/schema/todoSchema.js')
module.exports = (req,res,next) => {
    Todo.remove({},(err)=> {
        if(err) return next(err)
        return res.sendStatus(200)
    })
}

