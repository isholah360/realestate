import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    payInfo: localStorage.getItem('payInfo')
    ? JSON.parse(localStorage.getItem('payInfo'))
    : null
  };
  

export const paySlice = createSlice({
   name: "pay",
   initialState, 
   reducers: {
    setPayInfo: (state, action) => {
      state.payInfo = action.payload;
      try {
        localStorage.setItem('payInfo', JSON.stringify(action.payload));
      } catch (err) {
        console.error('Error saving state to localStorage:', err);
      }
    },
    clearPayInfo: (state) => {
      state.payInfo = null;
      // Remove from localStorage
      localStorage.removeItem('payInfo');
    }
  }
})

export const { setPayInfo, clearPayInfo } = paySlice.actions;

export default paySlice.reducer;