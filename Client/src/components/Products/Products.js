import React ,{useState}from 'react'
import '../../css/Products/Products.css'
import ProductModal from './ProductModal'
export default function Products(props) {
  const[product,setProduct]=useState("")
  function openModal(item){
    setProduct(item)
  }
  const closeModal =()=>{
    setProduct(false)
  }
  return (
    <div className='products-wrapper'>
      {props.filterArray.length==0?props.products.map(item=>(
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
  
    </div>
  )
}
