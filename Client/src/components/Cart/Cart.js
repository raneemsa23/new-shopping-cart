import React, { useState } from 'react'
import '../../css/Cart/Cart.css'
import img from '../../images/img-1.jpg'
import Form from '../Form/Form'
export default function Cart(props) {
  const[isShow,setIsShow]=useState(false)
  return (
    <div className='cart p-5'>
      <p>{props.cartItems.length==0?"Cart Empty":`there is ${props.cartItems.length}  item in cart`}</p>
      <hr />
      <div className=" items ">
      {
          props.cartItems.map(item=><div key={item.id} className="item row">
          <div className="col-2">
              <img src={item.imgUrl} alt="photo" />
          </div>
          <div className="col-3">
              <p>{item.title}</p>
              <p>QTY:{item.qty}</p>
              <p>price:{item.price}</p>
          </div>
          <div className="col-7 text-end px-5">
              <button className='btn btn-primary' onClick={()=>props.removeFromCart(item.id)}>remove</button>
          </div>
 
         </div>)
      }
      {
        props.cartItems.length!==0 && (<div className='total'>
        <p>total price : <span>{props.cartItems.reduce((acc,p)=>{
            return acc+p.price
        },0)}$</span></p>
        <button className='btn btn-primary' onClick={()=>setIsShow(true)}>select product</button>
      </div>)
      }
      {
        isShow && <Form setIsShow={setIsShow}/>
      }

      </div>
     
    </div>
  )
}
