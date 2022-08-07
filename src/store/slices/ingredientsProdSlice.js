import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

export const ingredientsProdSlice = createSlice({
  name: "ingredietnsProd",
  initialState,
  reducers: {
    toggleIngredient: (state, actions) => {
      const item = actions.payload;
      const isAlready = state.list.some((ing) => ing.id === item.id);

      if (isAlready) {
        state.list = state.list.filter((ing) => ing.id !== item.id);
      } else {
        state.list.push(item);
      }
    },

    initIngredient: (state, actions) => {
      const item = actions.payload;
      const isAlready = state.list.some((ing) => ing.id === item.id);

      if (!isAlready) {
        state.list.push(item);
      }
    },
  },
});

export const { toggleIngredient, initIngredient } = ingredientsProdSlice.actions;
export default ingredientsProdSlice.reducer;
