const express= require('express')
const mongoose =require('mongoose')
const bodyParser=require('body-parser')
const productRouter = require('./routes/routes')
const orderRouter=require('./routes/orderRoutes')
const app=express()
app.use(bodyParser.json())
app.use('/',productRouter)
app.use('/',orderRouter)
 


mongoose.connect('mongodb://localhost/react-shopping-cart',{useNewUrlParser:true,useUnifiedTopology:true}).then(res=>console.log("connection done"))





app.listen(3001,()=>{
    console.log("running on 3001");
})