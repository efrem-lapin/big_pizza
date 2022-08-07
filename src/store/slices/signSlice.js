import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSign: false
}

export const signSlice = createSlice({
    name: "sign",
    initialState,
    reducers: {
        setSign: (state, action) => {
            state.isSign = action.payload;
        }
    }
});

export const {setSign} = signSlice.actions;
export default signSlice.reducer;