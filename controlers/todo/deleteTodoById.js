const Todo = require('../../models/schema/todoSchema.js')
module.exports = (req,res,next) => {
    Todo.findByIdAndRemove(req.params.id,(err,todo) => {
        if(err) return next (err)
        if(!todo) return res.status(400).send('No todo with that id')
        res.sendStatus(200)
    })
}

