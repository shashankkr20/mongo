const express=require('express')
const app=express();
const users=require('./../schema/user')
const adduser=app.post('/',async(req,res)=>{
    try{
        console.log(req.body.name)
        const  adduser=await users.create(req.body).then(res.send("added"))
    // res.send("added")
    }
    catch(err){
        console.log(err)
        res.send("error")
    }
    
})
module.exports=adduser