const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = new Schema({
    title:String,
    context:String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
     }
})


const Todo = mongoose.model('todo',todoSchema)

module.exports = Todo
