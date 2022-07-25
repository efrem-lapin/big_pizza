import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isScrollHeader: false,
  topScroll: 0
};

export const scrollHeaderSlice = createSlice({
  name: "scrollHeader",
  initialState,
  reducers: {
    setIsScrollHeader: (state, action) => {
      state.isScrollHeader = action.payload;
    },

    setTopScroll: (state, action) => {
      state.topScroll = action.payload;
    }
  },
});

export const {setIsScrollHeader, setTopScroll} = scrollHeaderSlice.actions;
export default scrollHeaderSlice.reducer;
