import { configureStore } from '@reduxjs/toolkit'
import dataMapReducer from './dataMap'

 const store = configureStore({
  reducer: {
    dataMap: dataMapReducer
  },
})
export default store;