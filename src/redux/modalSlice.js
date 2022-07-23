import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isModal: false,
  type: null,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setIsModal: (state, action) => {
      state.isModal = action.payload;
    },
  },
});

export const { setIsModal, setModalType } = modalSlice.actions;
export default modalSlice.reducer;
