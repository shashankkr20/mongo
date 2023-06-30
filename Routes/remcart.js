const express=require('express')
const app=express();
const users=require('./../schema/user');
const adduser = require('./addUser');
const remcart=app.put('/:perid/:objid/:quant',async(req,res)=>{
    try{
        // console.log(req.params.objid+"  "+req.params.quant)
        const newObject = {
            objid: req.params.objid,
            quant: parseInt(req.params.quant),
          };
        const filter = { _id: req.params.perid, 'cart.objid' : req.params.objid  };
        // const  adduser=await users.updateOne({_id: req.params.perid},{$push:{cart:newObject}}).then(res.send("added"))
        const  remcar=await users.updateOne(filter,{ $inc: { 'cart.$.quant': ((-1)*(parseInt(req.params.quant))) } })
        if(remcar.matchedCount===0)
        {
           console.log("notmod match")
        }
        else if(remcar.modifiedCount===1)
        {
            res.send("updated successfully")
        }
    // res.send("added")
    }
    catch(err){
        console.log(err)
        res.send("error")
    }
    
})
module.exports=remcart