const express=require('express')
const app=express();
const users=require('./../schema/order')
const getorder=app.get('/:id',async(req,res)=>{
    try{
        console.log(req.params.id)
        const adduser=await users.find({"perid":req.params.id})
        res.send(adduser)
    }
    catch(err){
        console.log(err)
        res.send("error")
    }
})

module.exports=getorder