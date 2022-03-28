import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const fetchProducts = createAsyncThunk(
  'get/products',
  async () => {
    const response = await axios.get('http://localhost:3001/api/products')
    return response.data
  }
)
export const productSlice = createSlice({
  name: 'products',
  initialState:{
    
     loading:false,
     error:false
  },
  reducers: {
 
  },
  extraReducers:{
[fetchProducts.pending]:(state)=>{
state.loading=true
},
[fetchProducts.fulfilled]:(state,action)=>{
state.userData=action.payload
state.loading=false;

},
[fetchProducts.rejected]:(state)=>{
  state.error=true;
  state.loading=false
},
  },
})


export const { } = productSlice.actions

export default productSlice.reducer

// using
// dispatch(fetchProducts({name,email}))