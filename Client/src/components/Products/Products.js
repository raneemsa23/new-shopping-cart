import React from 'react'
import '../../css/Products/Products.css'

export default function Products(props) {
  return (
    <div className='products-wrapper'>
      {props.products.map(item=>(
      <div className='product-item' key={item.id}>
          <img src={item.imgUrl}alt={item.title} className='pro-img'/>
         <div className='product-desc'>
          <span>{item.title}</span>
          <span>{item.price}</span>
         
         </div>
         <button>Add To Cart</button>
         
      </div>))}
    </div>
  )
}
