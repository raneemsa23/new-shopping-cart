const Product = require("../models/ProductModel")

const express= require('express')
const router=express.Router()
router.get('/api/products',async(req,res)=>{
    const products= await  Product.find()
    res.send(products)
})
router.post('/api/products',async(req,res)=>{

    const newProduct=new Product(req.body)
    const savep= await newProduct.save()
    res.send(savep)
})
router.delete('/api/products/:id',async(req,res)=>{
    const deletedProduct= await  Product.findByIdAndDelete(req.params.id)
    res.send(deletedProduct)
})
module.exports= router