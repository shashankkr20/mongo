const mongo=require('mongoose')

const userSchema=mongo.Schema({
    name:{
        type:String,
        required:true
    },
    phoneno:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    wishlist:{
        type:[],
        required:false
    },
    cart:{
        type:[],
        required:false
    }
})
const user=mongo.model('Users',userSchema)
module.exports=user