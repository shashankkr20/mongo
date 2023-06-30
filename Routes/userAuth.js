const express=require('express')
const app=express();
const users=require('./../schema/user')
const authuser=app.get('/:id/:pass',async(req,res)=>{
    try{
        console.log(req.params.id+req.params.pass)
        const adduser=await users.find({"phoneno":req.params.id})
            if(adduser[0].password===req.params.pass)
            {
                console.log(adduser[0])
                res.send(adduser[0])
                
            }
            else{
                res.send("not")
            }
        
        
        
    }
    catch(err){
        console.log(err)
        res.send("error")
    }
})

module.exports=authuser