import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: {},
  type: null,
  sum: 0
};

const calcSum = (state) => {
  let sum = state.price;

  if (state.type === "sushi") {
    switch (state.list.size) {
      case "8":
        break;
      case "16":
        sum *= 2;
        break;
    }
  }
 
  if (state.type === "pizza") {
    let ratioThin = 0;

    switch (state.list.thin) {
      case "Традиционная":
        ratioThin = 0;
        break;
      case "Тонкая":
        ratioThin = 0.1;
        break;
    }

    sum -= Math.round(sum * ratioThin);

    let ratioSize = 0;

    switch (state.list.size) {
      case "20 см":
        break;
      case "28 см":
        ratioSize = 0.1;
        break;
      case "30 см":
        ratioSize = 0.15;
        break;
    }

    sum += Math.round(sum * ratioSize);
  }
  
  state.sum = sum;
}

export const ProductOptions = createSlice({
  name: "prodOptions",
  initialState,
  reducers: {
    setOptions: (state, actions) => {
      for (let i in actions.payload) {
        state.list[i] = actions.payload[i];
      }

      calcSum(state);
    },

    setOptionsProd: (state, actions) => {
      for (let i in actions.payload) {
        state[i] = actions.payload[i];
      }
    },

    resetOptions: (state) => {
      state.sum = 0;
    }
  },
});

export const { setOptions, resetOptions, setOptionsProd } =
  ProductOptions.actions;

export default ProductOptions.reducer;
