const express=require('express')
const app=express();
require('dotenv').config();
const mongo=require('mongoose')
const cors = require("cors");
const path=require("path")
const addcart=require('./Routes/cartadd')
const addord=require('./Routes/orderadd')
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
const orderget=require('./Routes/fetchorder')
const discounted=require('./Routes/discountProd')

app.use(cors())
app.use(express.json())


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
app.use('/orderadd',addord)
app.use('/fetchorders',orderget)
app.use('/discounted-prods',discounted)
async function startServer() {
    try {
      await mongo.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
      console.log('Connected to the database');
      app.listen(3001, () => {
        console.log('Server is listening on port 3000');
      });
    } catch (error) {
      console.error('Error connecting to database:', error);
    }
  }
  
  startServer();
