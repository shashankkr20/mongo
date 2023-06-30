const express=require('express')
const app=express();
require('dotenv').config();
const mongo=require('mongoose')
const cors = require("cors");
const path=require("path")
const addcart=require('./Routes/cartadd')
const adduser = require('./Routes/addUser');
const authuser = require('./Routes/userAuth');
const addprods = require('./Routes/prodAdd');
const searchitem=require('./Routes/searchItem')
const upduser=require('./Routes/updateuser');
const remcart = require('./Routes/remcart');
const remall = require('./Routes/removeall');
const wishadd = require('./Routes/wishadd');
const emptycart = require('./Routes/cartempty');
const searchwish=require('./Routes/searchwish')


app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname+"/public")))

const url=process.env.URL_DB
// const con=mongo.connect(url,{}).then(res=>console.log("conneted")).catch(err=>console.log(err))

app.use('/adduser',adduser);
app.use('/authuser',authuser);
app.use('/prodadd',addprods)
app.use('/cartadd',addcart)
app.use('/searchItem',searchitem)
app.use('/searchwish',searchwish)
app.use('/updateuser',upduser)
app.use('/removecart',remcart)
app.use('/remall',remall)
app.use('/wish',wishadd.wishadder)
app.use('/wish',wishadd.wishrem)
app.use('/cartempty',emptycart)

// app.listen(5000,()=>{
//     console.log("running on port 5000")
// })
mongo.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    // Handle the error appropriately (e.g., exit the application)
  } else {
    // Connection successful, start the server
    app.listen(5000, () => {
      console.log('Server is listening on port 5000');
    });
  }
});