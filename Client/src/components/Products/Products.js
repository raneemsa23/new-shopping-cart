import React ,{useEffect, useState}from 'react'
import '../../css/Products/Products.css'
import ProductModal from './ProductModal'
import Bounce from 'react-reveal/Bounce';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, fillProducts } from '../../store/productSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import { addToCart } from '../../store/cartSlice';
export default function Products(props) {
  // const {products}=props
  const dispatch=useDispatch()
	const {products}=useSelector(state=>state.product)
	// console.log("productssss",products);
	// const [products,setProducts]=useState([])
	useEffect(()=>{
  
		dispatch(fetchProducts())
		// .then(unwrapResult)
		// 	.then((result) => {
		// 	  setProducts(result) // => array
		// 	})
	 
	 
	  },[])
   
  const[product,setProduct]=useState("")
  const {filteredArray}=useSelector(state=>state.filter)
 const {filteredSort}=useSelector(state=>state.filter)
  console.log(filteredSort);
  function openModal(item){
    setProduct(item)
  }
  const closeModal =()=>{
    setProduct(false)
  }

  return (
    <Bounce left cascade>
      <div className='products-wrapper'>
        
      {filteredArray.length==0?products.map(item=>(
      <div className='product-item' key={item.id}>
        <a href='#' onClick={()=>openModal(item)}>
        <img src={item.imgUrl}alt={item.title} className='pro-img'/>
        </a>
         <div className='product-desc'>
          <span>{item.title}</span>
          <span>{item.price+"$"}</span>
         
         </div>
         <button onClick={()=>dispatch(addToCart({item}))}>Add To Cart</button>
        
         
      </div>)):filteredArray.map(item=>(
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
