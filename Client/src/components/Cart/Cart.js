import React from 'react'
import '../../css/Cart/Cart.css'
import img from '../../images/img-1.jpg'
export default function Cart(props) {
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

      </div>
    </div>
  )
}
