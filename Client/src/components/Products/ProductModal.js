import React from 'react'
import Modal from 'react-modal'

export default function ProductModal(props) {
    const{product,closeModal}=props
  return (
    <Modal isOpen={product} onRequestClose={closeModal}>
    <div className='pro-details'>
      <span className='times' onClick={closeModal}>&times;</span>
     <div className='pro-details-img'>
     <img src={product.imgUrl} alt="" />
     </div>
      <p>{product.title}</p>
      <p>{product.desc}</p>
    </div>
   </Modal>
  )
}
