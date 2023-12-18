const express=require('express')
const app=express();
const prods=require('./../schema/product')
const addprod=app.post('/',async(req,res)=>{
    try{
        console.log(req.body.name)
        const  adduser=await prods.create(req.body).then(res.send("added"))
    // res.send("added")
    }
    catch(err){
        console.log(err)
        res.send("error")
    }
    
})
module.exports=addprod