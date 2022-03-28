import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
// import { act } from 'react-dom/cjs/react-dom-test-utils.production.min'

export const addUser = createAsyncThunk(
  'add/user',
  async (userData) => {
    const response = await axios.post('http://localhost:5000/api/user',userData)
    return response.data
  }
)
export const userSlice = createSlice({
  name: 'user',
  initialState:{
     userData:{
      name:"",
      email:"",
     },
     loading:false,
     error:false
  },
  reducers: {
  //  addUser:(state,action)=>{
  //      console.log(state);
  //      console.log(action);
  //      state.name=action.payload.name
  //      state.email=action.payload.email
  //  },
  //  startUser:(state)=>{
  //  state.loading=true
  //  },
  //  successUser:(state,action)=>{
  //    state.userData=action.payload;
  //    state.loading=false
  //  },
  //  errorUser:(state)=>{
  //   state.error=true;
  //   state.loading=false
  //  },
  },
  extraReducers:{
[addUser.pending]:(state)=>{
state.loading=true
},
[addUser.fulfilled]:(state,action)=>{
state.userData=action.payload
state.loading=false;

},
[addUser.rejected]:(state)=>{
  state.error=true;
  state.loading=false
},
  },
})


export const { startUser,successUser,errorUser} = userSlice.actions

export default userSlice.reducer