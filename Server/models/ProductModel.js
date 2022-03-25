const mongoose=require('mongoose')
const productSchema=require('../schema/ProductSchema')
const Product=mongoose.model('product',productSchema)
module.exports=Product