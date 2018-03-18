const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    userName:String,
    firstName:String,
    lastName:String,
    email:String,
    todos:[{
        type:Schema.Types.ObjectId, ref:'todo'
    }],
    hash:String,
})

const User = mongoose.model('user',userSchema)
module.exports = User