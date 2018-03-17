const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs')

const userSchema = new Schema({
    firstName:{type:String,trim:true},
    lastName:{type:String,trim:true},
    userName:{type:String,required:true,unique:true,sparse:true,trim:true},
    email:{type:String,required:true,unique:true,sparse:true,trim:true},
    phoneNumber:{type:String,unique:true,sparse:true,required:true},
    hash:{type:String,required:true}
})

userSchema.pre('save',function(callback) {
    if(!this.userName)
        return callback(new Error('Missing userName'))
    if(!this.email)
        return callback(new Error('Missing email'))
    if(!this.phoneNumber)
        return callback(new Error('Missing phoneNumber'))
    callback()
})

userSchema.methods.comparePassword = function(pw) {
    return bcrypt.compareSync(pw,this.hash)
}

//create FullName for each user
userSchema.virtual('name').get(function() {
    name = "";
    if (this.firstName) {
        name = this.firstName
        if (this.lastName) name += ' ' + this.lastName;
    } else if (this.lastName) name = this.lastName;
    return name;
});


const User = mongoose.model('User',userSchema)
module.exports = User