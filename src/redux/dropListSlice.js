import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDropList: false,
};

export const dropListSlice = createSlice({
  name: "dropList",
  initialState,
  reducers: {
    setIsDropList: (state, actions) => {
      state.isDropList = actions.payload;
    },
  },
});

export const {setIsDropList} = dropListSlice.actions;
export default dropListSlice.reducer;