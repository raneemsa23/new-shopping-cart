import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const postOrder = createAsyncThunk("post/order", async (order) => {
	const response = await axios.post("http://localhost:3001/api/orders", order);
	return response.data;
});
export const orderSlice = createSlice({
	name: "order",
	initialState: {
		order: {},
		loading: false,
		error: false,
	},
	reducers: {
		clearOrder: (state, action) => {
      
			state.order = false;
		},
	},
	extraReducers: {
		[postOrder.pending]: (state) => {
			state.loading = true;
		},
		[postOrder.fulfilled]: (state, action) => {
			state.order = action.payload;
			state.loading = false;
		},
		[postOrder.rejected]: (state) => {
			state.error = true;
			state.loading = false;
		},
	},
});

export const {clearOrder} = orderSlice.actions;

export default orderSlice.reducer;
