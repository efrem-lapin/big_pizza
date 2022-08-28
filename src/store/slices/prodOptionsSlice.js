import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: {},
  type: null,
  ratio: 1
};

const calcRatio = (state) => {
  let sumRatio = 1;

  // SUSHI OPTIONS
  if (state.type === "sushi") {
    switch (state.list.size) {
      case "8 шт":
        break;
      case "16 шт":
        sumRatio = 2;
        break;
    }
  }
 
  // PIZZA OPTIONS
  if (state.type === "pizza") {
    switch (state.list.thin) {
      case "Традиционная":
        break;
      case "Тонкая":
        sumRatio += 0.1;
        break;
    }

    switch (state.list.size) {
      case "20 см":
        break;
      case "28 см":
        sumRatio += 0.1;
        break;
      case "30 см":
        sumRatio += 0.15;
        break;
    }
  }
  
  state.ratio = sumRatio;
}

export const ProductOptions = createSlice({
  name: "prodOptions",
  initialState,
  reducers: {
    setOptions: (state, actions) => {
      for (let i in actions.payload) {
        state.list[i] = actions.payload[i];
      }

      calcRatio(state);
    },

    setOptionsProd: (state, actions) => {
      for (let i in actions.payload) {
        state[i] = actions.payload[i];
      }
    },

    resetOptions: (state) => {
      state.ratio = 1;
      state.list = {};
    }
  },
});

export const { setOptions, resetOptions, setOptionsProd } =
  ProductOptions.actions;

export default ProductOptions.reducer;