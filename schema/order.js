const mongo=require('mongoose')

const ordSchema=mongo.Schema({
    perid:{
        type:String,
        required:true
    },
    orders:{
        type:[],
        required:true
    },
    totamt:{
        type:String,
        required:true
    },
})
const prod=mongo.model('Orders',ordSchema)
module.exports=prod