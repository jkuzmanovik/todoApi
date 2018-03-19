const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = new Schema({
    title:{type:String,required:true},
    context:{type:String},
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required:true
     }
})


const Todo = mongoose.model('todo',todoSchema)

module.exports = Todo
