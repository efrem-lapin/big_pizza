import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenFilter: false,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setIsOpenFilter: (state, action) => {
      state.isOpenFilter = action.payload;
    },
  },
});

export const { setIsOpenFilter } = filterSlice.actions;
export default filterSlice.reducer;
