import React from 'react'
import Modal from 'react-modal'
import './formModal.css'
import { useSelector } from 'react-redux'
export default function FormModal(props) {
    const {cartItems}=useSelector(state=>state.cart)
    function closeModal(){
        props.setOrder(false)
    }
 console.log("formmodel",props);
  return (
   
        	<Modal isOpen={props.order} onRequestClose={closeModal}>
                <span className="Modal close-icon " onClick={closeModal}>&times;</span>
              <div className="alert-success alert text-center">
				  Order Successfuly
			  </div>
			  <table>
				  <tr>
					  <td>Name:</td>
					  <td>{props.order.name}</td>
				  </tr>
				  <tr>
					  <td>Email:</td>
					  <td>{props.order.email}</td>
				  </tr>
				  <tr>
					  <td>Total:</td>
					  <td>{cartItems.reduce((acc,p)=>{
            return acc+p.price
        },0)}</td>
				  </tr>
                  <tr>
                      <td>Number of this product is :</td>
                      <td>
                      {cartItems.length}
                      </td>

                  </tr>
                  <tr>
                      <td>
                      Tiltle of product
                      </td>
                      <td>
                      {cartItems.map(p=><span key={p.id}>{p.title+" "}</span>)}
                      </td>
                  </tr>
				 
			  </table>
		</Modal>
    
  )
}
