const express=require('express')
const app=express();
const users=require('./../schema/user')
const upduser=app.get('/:id',async(req,res)=>{
    try{
        console.log(req.params.id)
        const adduser=await users.findOne({"_id":req.params.id})
        res.send(adduser)
           
        
        
        
    }
    catch(err){
        console.log(err)
        res.send("error")
    }
})

module.exports=upduser