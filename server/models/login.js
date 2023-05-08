import mongoose from'mongoose'

const UserSchema=mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        min:2,
        max:50,
    },
    lastName:{
        type:String,
        required:true,
        min:2,
        max:50,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true, 
    },
    post:{
        type:String,
        required:true,
        min:2,
        max:50,
    },
})

const User=mongoose.model('user',UserSchema)

export default User;