import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { useSelector } from 'react-redux'

export const filterSlice = createSlice({
  name: 'filter',
  initialState:{
    filteredArray:[],
    
    size:"all",
    sort:"",
     
     loading:false,
     error:false
  },
  reducers: {
   filterBySize:(state,action)=>{
   if(action.payload.size==="all"){
      state.size="all"
     const newfiltered= action.payload.products
      console.log("action in if",newfiltered);
     state.filteredArray=newfiltered
      
   }
   else{
     

      state.size=action.payload.size
      let newfiltered=action.payload.products.filter(p=>p.size.indexOf(action.payload.size)!==-1)
      
    
      console.log("action in else",action);
      console.log("action in else",newfiltered);
      state.filteredArray=newfiltered


   }
    
   },
   filterBySort:(state,action)=>{
      let ProductsClone=[];
     if(state.size=="all"){
       ProductsClone=[...action.payload.products]
     }
     else{
       ProductsClone=[...action.payload.filteredArray]
     }
      state.sort=action.payload.order;
      
      ProductsClone.sort(function(a,b){

      if(action.payload.order=="heighest"){
         console.log("heighest",ProductsClone);

         return b.price - a.price
      }
      else if(action.payload.order=="lowest"){
         console.log(ProductsClone);
         return a.price - b.price
      }
      else{
         console.log(ProductsClone);

         return b.id - a.id 
      }
     })
     state.filteredArray=ProductsClone
      
   }

    },
  
})


export const { filterBySize,filterBySort} = filterSlice.actions

export default filterSlice.reducer