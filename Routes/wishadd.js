const express=require('express')
const app=express();
const users=require('./../schema/user');
const wishadder=app.put('/add/:perid/:objid',async(req,res)=>{
    try{
        console.log("wishadd")
        // const newObject = {
        //     objid: req.params.objid,
        //     quant: parseInt(req.params.quant),
        //   };
        const filter = { _id: req.params.perid };
        // const  adduser=await users.updateOne({_id: req.params.perid},{$push:{cart:newObject}}).then(res.send("added"))
        const  wish=await users.updateOne(filter,{ $push: { wishlist:req.params.objid  } })
        if(wish.matchedCount===0)
        {
           console.log("notmod match")
        }
        else if(wish.modifiedCount===1)
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
const wishrem=app.put('/rem/:perid/:objid',async(req,res)=>{
    try{
        console.log("wishrem")
        const filter = { _id: req.params.perid };
        // const  adduser=await users.updateOne({_id: req.params.perid},{$push:{cart:newObject}}).then(res.send("added"))
        const  wish=await users.updateOne(filter,{ $pull: { wishlist: req.params.objid } });
        if(wish.matchedCount===0)
        {
           console.log("notmod match")
        }
        else if(wish.modifiedCount===1)
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

module.exports={wishadder,wishrem}