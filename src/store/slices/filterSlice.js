import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenFilter: false,
  list: []
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setIsOpenFilter: (state, action) => {
      state.isOpenFilter = action.payload;
    },

    toggleItemFilter: (state, action) => {
      if (state.list.includes(action.payload)) {
       state.list = state.list.filter(item => item !== action.payload);
      } else {
        state.list.push(action.payload);
      }
    },

    resetFilters: (state) => {
      state.list = [];
    }
  },
});

export const { setIsOpenFilter, toggleItemFilter,resetFilters } = filterSlice.actions;
export default filterSlice.reducer;
