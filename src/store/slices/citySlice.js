import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  city: "Москва",
  restaurants: ["ул. Московская, д.99", "ул. Северная, д.20"],
};

const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    setCity: (state, actions) => {
      state.city = actions.payload;

      switch (state.city) {
        case "Москва":
          state.restaurants = ["ул. Московская, д.99", "ул. Северная, д.20"];
          break;
        case "Санкт-Петербург":
          state.restaurants = ["ул. Петербургская, д.99", "ул. Южная, д.21"];
          break;
        default:
            state.restaurants = []
      }
    },
  },
});

export const {setCity} = citySlice.actions;
export default citySlice.reducer;
