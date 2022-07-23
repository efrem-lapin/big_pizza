import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    path: "history"
}

const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {
        setPath: (state, action) => {
            state.path = action.payload;
        }
    }
})

export const {setPath} = accountSlice.actions;
export default accountSlice;