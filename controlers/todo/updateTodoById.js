const Todo = require('../../models/schema/todoSchema.js')
module.exports = (req,res,next) => {
    Todo.findOneAndUpdate({_id:req.params.id},req.body,(err,todo) => {
        if(err) return next(err)
        if(!todo) return res.status(400).send('no todo with that id')
        return res.sendStatus(200)
    })
}

