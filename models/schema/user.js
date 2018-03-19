const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    userName:{type: String, required: true, unique:true, trim:true},
    firstName:{type:String, trim:true},
    lastName:{type:String, trim:true},
    email:{type:String, required:true, unique:true,trim:true},
    todos:[{
        type:Schema.Types.ObjectId, ref:'todo'
    }],
    hash:{type:String, required:true}
})

const User = mongoose.model('user',userSchema)
module.exports = User