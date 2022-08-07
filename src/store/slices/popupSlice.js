import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

export const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    addPopup: (state, actions) => {
      state.list.push(actions.payload);
    },

    removePopup: (state, actions) => {
      state.list.pop();
    },
  },
});

export const {addPopup, removePopup} = popupSlice.actions;

export default popupSlice.reducer;
