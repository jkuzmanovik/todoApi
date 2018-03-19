const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = new Schema({
    title:{type:String,required:true},
    context:{type:String},
    isFinished:{type:Boolean,default:false},
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required:true
     }
},  {
    toObject: { getters: true },
    timestamps: {
        createdAt: 'createdDate',
        updatedAt: 'updatedDate'
    }
})


const Todo = mongoose.model('todo',todoSchema)

module.exports = Todo
