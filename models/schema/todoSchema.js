const mongoose = require('mongoose')
const Schema = mongoose.Schema



const todoSchema = new Schema({
    title:{type:String, required:true, trim:true},
    context:{type:String, trim:true,},
    isFinished:{type:Boolean,required:true,default: false},
    finishedAt:{type:Date}
    },{
    timestamps:{getters:true},
    timestamps:{
        createdAt: 'createdDate',
        updatedAt: 'updateDate'
        }
  })




const Todo = mongoose.model('Todo',todoSchema)
module.exports = Todo
