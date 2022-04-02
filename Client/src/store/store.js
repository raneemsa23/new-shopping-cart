import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartSlice'
import  filterSlice  from './filterSlice'
import productSlice from './productSlice'

export const store = configureStore({
  reducer: {
      product:productSlice,
      filter:filterSlice,
      cart:cartSlice,
  },
})