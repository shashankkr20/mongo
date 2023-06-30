const express=require('express')
const app=express();
const users=require('./../schema/product')
const searchcat=app.get('/:id',async(req,res)=>{
    try{
        console.log(req.params.id)
        const adduser=await users.find({"category":req.params.id})
        res.send(adduser)
    }
    catch(err){
        console.log(err)
        res.send("error")
    }
})
// const wishsearch=app.get('/wishs/:id',async(req,res)=>{
//     console.log("wishsearch")
//     try{
//         console.log(req.params.id)
//         const adduser=await users.find({"_id":{$in:req.params.id}})
//         res.send(adduser)
//     }
//     catch(err){
//         console.log(err)
//         res.send("error")
//     }
// })
module.exports=searchcat