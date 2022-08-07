import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  sum: 0,
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

    calcSum: (state) => {
      let sum = state.price;

      if (state.type === "sushi") {
        switch (state.size) {
          case "8":
            break;
          case "16":
            sum *= 2;
            break;
        }
      }
     
      if (state.type === "pizza") {
        if (state.thickness === "thin") {
          sum -= Math.round(sum * 0.1);
        }

        let ratio = 0;

        switch (state.size) {
          case "20":
            break;
          case "28":
            ratio = 0.1;
            break;
          case "30":
            ratio = 0.15;
            break;
        }

        sum += Math.round(sum * ratio);
      }
      
      state.sum = sum;
    },
  },
});

export const { calcSum, setOptions} =
  ProductOptions.actions;

export default ProductOptions.reducer;
