import React ,{useEffect, useState}from 'react'
import '../../css/Products/Products.css'
import ProductModal from './ProductModal'
import Bounce from 'react-reveal/Bounce';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../../store/productSlice';
import { unwrapResult } from '@reduxjs/toolkit';
export default function Products(props) {
  const[products,setProducts]=useState([])
  const[product,setProduct]=useState("")
  const dispatch=useDispatch()
  useEffect(()=>{

    dispatch(fetchProducts()).then(unwrapResult)
		.then((result) => {
		  setProducts(result) // => array[4]
		})
  },[])
  function openModal(item){
    setProduct(item)
  }
  const closeModal =()=>{
    setProduct(false)
  }
  useEffect(()=>{
    // setMyPro(dispatch(getProducts()))
   
  },[])
  // console.log("myp",mypro);
  return (
    <Bounce left cascade>
      <div className='products-wrapper'>
      {props.filterArray.length==0?products.map(item=>(
      <div className='product-item' key={item.id}>
        <a href='#' onClick={()=>openModal(item)}>
        <img src={item.imgUrl}alt={item.title} className='pro-img'/>
        </a>
         <div className='product-desc'>
          <span>{item.title}</span>
          <span>{item.price+"$"}</span>
         
         </div>
         <button onClick={()=>props.handleAddToCart(item)}>Add To Cart</button>
        
         
      </div>)):props.filterArray.map(item=>(
      <div className='product-item' key={item.id}>
        <a href='#' onClick={()=>openModal(item)}>
        <img src={item.imgUrl}alt={item.title} className='pro-img'/>
        </a>
         <div className='product-desc'>
          <span>{item.title}</span>
          <span>{item.price}</span>
         
         </div>
         <button>Add To Cart</button>
        
         
      </div>))}
      
      <ProductModal product={product} closeModal={closeModal}/>
      {products.length==0 && <h1>LOADING ...</h1>}
    </div>
    </Bounce>
  )
}
