const express=require('express')
const app=express();
const users=require('./../schema/product')


const wishsearch=app.get('/:id',async(req,res)=>{
    console.log("wishsearch")
    try{
        console.log(req.params.id)
        const adduser=await users.find({"_id":{$in:req.params.id}})
        res.send(adduser)
    }
    catch(err){
        console.log(err)
        res.send("error")
    }
})
module.exports=wishsearch