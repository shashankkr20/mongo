const express=require('express')
const app=express();
const users=require('./../schema/user');
const adduser = require('./addUser');
const cartempty=app.put('/:perid',async(req,res)=>{
    try{
        // console.log(req.params.objid+"  "+req.params.quant)
        
        const filter = { _id: req.params.perid};
        // const  adduser=await users.updateOne({_id: req.params.perid},{$push:{cart:newObject}}).then(res.send("added"))
        const  remcar=await users.updateOne(filter,{ $set: { cart: [] } })
        if(remcar.matchedCount===1)
        {
          res.send("cart emptied")
        }
        else 
        {
            console.log("not done")
        }
        // console.log(remcar)
    // res.send("added")
    }
    catch(err){
        console.log(err)
        res.send("error")
    }
    
})
module.exports=cartempty