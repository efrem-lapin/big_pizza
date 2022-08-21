import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSign: false,
    phone: null,
}

export const signSlice = createSlice({
    name: "sign",
    initialState,
    reducers: {
        setSign: (state, action) => {
            state.isSign = action.payload;
        },

        setPhone: (state, actions) => {
            state.phone = actions.payload.phone;
        }
    }
});

export const {setSign, setPhone} = signSlice.actions;
export default signSlice.reducer;