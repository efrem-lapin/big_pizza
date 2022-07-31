import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  sum: 0,
  extras: [],
  ingredients: [],
};

export const ProductOptions = createSlice({
  name: "prodOptions",
  initialState,
  reducers: {
    setOptions: (state, actions) => {
      for (let i in actions.payload) {
        state[i] = actions.payload[i];
      }
    },

    toggleIngredient: (state, actions) => {
      const {type, item} = actions.payload;

      if (state[type].some(ing => ing.id === item.id)) {
        state[type] = state[type].filter(ing => ing.id !== item.id);
      } else {
        state[type].push(item);
      }
    },

    calcSum: (state) => {
      let sum = state.price;

      if (state.extras.length) {
        sum += state.extras.reduce(
          (i, item) => item.price + i,
          0
        );
      }

      if (state.thickness === "thin") {
        sum -= Math.round(sum * 0.1);
      }

      switch (state.sushisize) {
        case "small":
          break;
        case "big":
          sum *= 2;
          break;
      }

      switch (state.pizzasize) {
        case "28":
          sum += Math.round(sum * 0.1);
          break;
        case "30":
          sum += Math.round(sum * 0.15);
          break;
      }

      state.sum = sum;
    },
  },
});

export const { calcSum, setOptions, toggleIngredient} =
  ProductOptions.actions;

export default ProductOptions.reducer;
