const express=require('express')
const app=express();
const users=require('./../schema/user');
const adduser = require('./addUser');
const cartadd=app.put('/:perid/:objid/:title/:price/:image/:quant',async(req,res)=>{
    try{
        // console.log(req.params.objid+"  "+req.params.quant)
        const newObject = {
            objid: req.params.objid,
            quant: parseInt(req.params.quant),
            title: req.params.title,
            price:req.params.price,
            image:req.params.image
          };
        const filter = { _id: req.params.perid, 'cart.objid' : req.params.objid  };
        // const  adduser=await users.updateOne({_id: req.params.perid},{$push:{cart:newObject}}).then(res.send("added"))
        const  adduser=await users.updateOne(filter,{ $inc: { 'cart.$.quant': parseInt(req.params.quant) } })
        if(adduser.matchedCount===0)
        {
            const  adduser1=await users.updateOne({_id: req.params.perid},{$push:{cart:newObject}}).then(res.send("added"))
        }
        else if(adduser.modifiedCount===1)
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
module.exports=cartadd