const mongo=require('mongoose')

const prodSchema=mongo.Schema({
    brname:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    actprice:{
        type:String,
        required:true,
    },
    disprice:{
        type:String,
        required:false,
    },
    image:{
        type:String,
        required:true
    },
    quantity:{
        type:String,
        required:true
    },
    rating_star:{
        type:String,
        default:'1',
        required:false,
    },
    rating_no:{
        type:String,
        default:'10',
        required:false,
    },
    cart:{
        type:[],
        required:false
    }
})
const prod=mongo.model('Products',prodSchema)
module.exports=prod