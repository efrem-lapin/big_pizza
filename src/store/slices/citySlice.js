import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  city: "Москва",
  restaurants: ["ул. Трех петухов 12/14б", "и ещё..."],
};

const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    setCity: (state, actions) => {
      state.city = actions.payload;

      switch (state.city) {
        case "Москва":
          state.restaurants = ["ул. Трех петухов 12/14б", "и ещё..."];
          break;
        case "Санкт-Петербург":
          state.restaurants = ["ул. Четырех петухов 13", "и ещё..."];
          break;
        default:
            state.restaurants = []
      }
    },
  },
});

export const {setCity} = citySlice.actions;
export default citySlice.reducer;
