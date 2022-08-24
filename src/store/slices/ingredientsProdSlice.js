import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

export const ingredientsProdSlice = createSlice({
  name: "ingredietnsProd",
  initialState,
  reducers: {
    toggleIngredient: (state, actions) => {
      const id = actions.payload;
      const index = state.list.findIndex(ing => ing.id === id);
      state.list[index].presence = !state.list[index].presence;
    },

    initIngredient: (state, actions) => {
      const item = actions.payload;
      const isAlready = state.list.some((ing) => ing.id === item.id);

      if (!isAlready) {
        state.list.push(item);
      }
    },

    resetIngredients: (state, actions) => {
      state.list = [];
    }
  },
});

export const { toggleIngredient, initIngredient, resetIngredients } = ingredientsProdSlice.actions;
export default ingredientsProdSlice.reducer;
