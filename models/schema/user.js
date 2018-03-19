const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs')

const userSchema = new Schema({
    userName:{type: String, required: true, unique:true, trim:true},
    firstName:{type:String, trim:true},
    lastName:{type:String, trim:true},
    email:{type:String, required:true, unique:true,trim:true},
    todos:[{
        type:Schema.Types.ObjectId, ref:'todo'
    }],
    password:{type:String, required:true}
    },{
        toObject: { getters: true },
        timestamps: {
            createdAt: 'createdDate',
            updatedAt: 'updatedDate'
        }
})


userSchema.pre('save',async function (next) {
    try{
        const salt = await bcrypt.genSalt(10)
        const passwordHash = await bcrypt.hash(this.password,salt)
        this.password = passwordHash
        next()
    }catch(err) {
        next(err)
    }
})

userSchema.methods.comparePassword = async function(pw) {
    try{
       return await bcrypt.compare(pw,this.password)
    }catch(err){
        throw new Error(err)
    }
}



const User = mongoose.model('user',userSchema)
module.exports = User