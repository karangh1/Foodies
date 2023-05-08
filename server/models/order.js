import mongoose from'mongoose'

const orderSchema=mongoose.Schema({
    tableNo:{
        type:String,
        required:true,
        min:2,
        max:50,
    },
    order:{
        type:String,
        required:true,
        min:2,
        max:500,
    },
    phone:{
        type:String,
        required:true,
        min:10,
        max:10,
    }
})

const Order=mongoose.model('order',orderSchema)

export default Order;