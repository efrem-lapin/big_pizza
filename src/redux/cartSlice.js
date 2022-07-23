import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCart: false,
  cartList: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setIsCart: (state, action) => {
      state.isCart = action.payload;
    },

    addProduct: (state, action) => {
      state.cartList.push(action.payload);
    },

    removeProduct: (state, action) => {
      state.cartList = state.cartList.filter((item) => item.id !== action.payload);
    },

    addProdCount: (state, action) => {
      state.cartList.map((item) => {
        if (item.id === action.payload) {
          return { ...item, count: item.count++ };
        } else {
          return item;
        }
      });
    },

    removeProdCount: (state, action) => {
      state.cartList.map((item) => {
        if (item.id === action.payload) {
          return { ...item, count: item.count-- };
        } else {
          return item;
        }
      });
    },
  },
});

export const {
  setIsCart,
  addProduct,
  removeProduct,
  addProdCount,
  removeProdCount,
} = cartSlice.actions;
export default cartSlice.reducer;
