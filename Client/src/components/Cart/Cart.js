import React, { useState } from 'react'
import '../../css/Cart/Cart.css'
import img from '../../images/img-1.jpg'
import Form from '../Form/Form'
import Fade from 'react-reveal/Fade';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../../store/cartSlice';
import { Words } from '../../staticWords';
export default function Cart(props) {
  const[isShow,setIsShow]=useState(false)
  const [total,setTotal]=useState(0)
  // console.log(total,"total");
  const {cartItems}=useSelector(state=>state.cart)
  const dispatch=useDispatch()
  console.log("cartItems",cartItems);
  function handleRemove(id){
    dispatch(removeItem({id}))
  }
  return (
    <div className='cart p-5'>
      <p>{cartItems.length==0?"Cart Empty":`there is ${cartItems.length}  item in cart`}</p>
      <hr />
      <div className=" items ">
      {
          cartItems.map(item=><Fade top>
            <div key={item.id} className="item row">
          <div className="col-2">
              <img src={item.imgUrl} alt="photo" />
          </div>
          <div className="col-3">
              <p>{item.title}</p>
              <p>{Words.QTY}:{item.qty}</p>
              <p>{Words.price}{item.price}</p>
          </div>
          <div className="col-7 text-end px-5">
              <button className='btn btn-primary' onClick={()=>handleRemove(item.id)
             
                }>remove</button>
          </div>
 
         </div>
          </Fade>)
      }
      {
        cartItems.length!==0 && (<div className='total'>
        <p>total price : <span>{cartItems.reduce((acc,p)=>{
            return acc+p.price
        },0)}$</span></p>
        <button className='btn btn-primary' onClick={()=>setIsShow(true)}>select product</button>
      </div>)
      }
      {
        isShow && <Form setIsShow={setIsShow} total={total}/>
      }

      </div>
     
    </div>
  )
}
