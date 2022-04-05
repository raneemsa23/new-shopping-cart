import {  createSlice } from '@reduxjs/toolkit'




export const cartSlice = createSlice({
  name: 'cart',
  initialState:{
     cartItems:JSON.parse(localStorage.getItem("cartItems"))||[],
     loading:false,
     error:false
  },
  reducers: {
   addToCart:(state,action)=>{
    let isExist=false;
	let cartItemsClone=[...state.cartItems]
	cartItemsClone.map(p=>{
		if(p.id==action.payload.item.id){
			isExist=true;
			p.qty++

		}
		
	})
	if(!isExist){
		cartItemsClone.push({...action.payload.item,qty:1})
	}
    
    state.cartItems=cartItemsClone
    localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
},
  
removeItem:(state,action)=>{
const cartItemsClone=[...state.cartItems]
const newCartItems=cartItemsClone.filter(item=>item.id!==action.payload.id)
console.log("new",newCartItems);
state.cartItems=newCartItems
localStorage.setItem('cartItems',JSON.stringify(state.cartItems))

},
clearCart:(state,action)=>{
 
  // state.cartItems=[]

localStorage.clear('cartItems');
document.location.reload();

}
  },////reducer
})


export const {addToCart,removeItem ,clearCart} = cartSlice.actions

export default cartSlice.reducer