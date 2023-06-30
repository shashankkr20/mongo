const express=require('express')
const app=express();
const users=require('./../schema/user');
const adduser = require('./addUser');
const remall=app.put('/:perid/:objid',async(req,res)=>{
    try{
        // console.log(req.params.objid+"  "+req.params.quant)
        const remal=await users.updateOne({_id: req.params.perid},
            { $pull: { cart: { objid: req.params.objid } } })
            // console.log(remall)
            if(remal.matchedCount===0)
        {
           console.log("notmod match")
        }
        else if(remal.modifiedCount===1)
        {
            res.send("updated successfully")
        }
    }
    catch(err){
        console.log(err)
        res.send("error")
    }
    
})
module.exports=remall