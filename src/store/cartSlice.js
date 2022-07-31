import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCart: false,
  cartList: [],
  cartSum: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setIsCart: (state, action) => {
      state.isCart = action.payload;
    },

    addProduct: (state, action) => {
      const idItemCart = Math.random();
      state.cartList.push({ ...action.payload, idItemCart, count: 1 });
      state.cartSum = state.cartList.reduce(
        (sum, item) => sum + (item.sum || item.price) * item.count,
        0
      );
    },

    removeProduct: (state, action) => {
      state.cartList = state.cartList.filter(
        (item) => item.idItemCart !== action.payload
      );
      state.cartSum = state.cartList.reduce(
        (sum, item) => sum + (item.sum || item.price) * item.count,
        0
      );
    },

    addProdCount: (state, action) => {
      state.cartList.map((item) => {
        if (item.idItemCart === action.payload) {
          return { ...item, count: item.count++ };
        } else {
          return item;
        }
      });
      state.cartSum = state.cartList.reduce(
        (sum, item) => sum + (item.sum || item.price) * item.count,
        0
      );
    },

    removeProdCount: (state, action) => {
      state.cartList.map((item) => {
        if (item.idItemCart === action.payload) {
          return { ...item, count: item.count-- };
        } else {
          return item;
        }
      });
      state.cartSum = state.cartList.reduce(
        (sum, item) => sum + (item.sum || item.price) * item.count,
        0
      );
    },
  },
});

export const {
  setIsCart,
  addProduct,
  removeProduct,
  addProdCount,
  removeProdCount,
  calcOrderSum,
} = cartSlice.actions;
export default cartSlice.reducer;
