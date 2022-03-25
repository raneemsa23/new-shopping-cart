const mongoose=require('mongoose')
const productSchema=new mongoose.Schema({
    id:String,
    title:String,
    imgUrl:String,
    desc:String,
    price:Number,
    size:[String]
})
module.exports=productSchema