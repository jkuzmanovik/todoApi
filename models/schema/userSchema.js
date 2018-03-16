const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    userName:{type:String,required:true,unique:true,trim:true},
    email:{type:String,required:true,unique:true,trim:true},
    token:{type:String,default:''},
    hash:{type:String,required:true},
})






const User = mongoose.model('User',userSchema)
module.exports = User