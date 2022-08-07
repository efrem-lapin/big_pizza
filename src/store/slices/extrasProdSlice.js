import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  sum: 0,
};

export const extrasProdSlice = createSlice({
  name: "extrasProd",
  initialState,
  reducers: {
    toggleExtras: (state, actions) => {
      const item = actions.payload;
      const isAlready = state.list.some((ex) => ex.id === item.id);

      if (isAlready) {
        state.list = state.list.filter((ex) => ex.id !== item.id);
      } else {
        state.list.push(item);
      }

      state.sum = state.list.reduce((i, item) => item.price + i, 0);
    },
  },
});

export const { toggleExtras } = extrasProdSlice.actions;
export default extrasProdSlice.reducer;
