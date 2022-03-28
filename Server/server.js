const express= require('express')
const mongoose =require('mongoose')
const bodyParser=require('body-parser')
const router = require('./routes/routes')
const app=express()
app.use(bodyParser.json())
app.use('/',router)


mongoose.connect('mongodb://localhost/react-shopping-cart',{useNewUrlParser:true,useUnifiedTopology:true}).then(res=>console.log("connection done"))





app.listen(3001,()=>{
    console.log("running on 3001");
})