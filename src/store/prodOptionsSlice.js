import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  prod: {
    pizzasize: "20",
    thickness: "tradicional",
    extras: [],
    count: 1,
  },
};

export const ProductOptions = createSlice({
  name: "prodOptions",
  initialState,
  reducers: {
    setSize: (state, actions) => {
      state.prod = { ...state.prod, ...actions.payload };
    },
  },
});

export default ProductOptions.reducer;
