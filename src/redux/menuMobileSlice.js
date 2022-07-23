import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    active: false
}

export const menuMobileSlice = createSlice({
    name: "mobileMenu",
    initialState,
    reducers: {
        setActive: (state, action) => {
            state.active = action.payload;
        }
    }
})

export const {setActive} = menuMobileSlice.actions;
export default menuMobileSlice.reducer;