import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sum: 0,
  devilery: "Доставка",
  products: [],
  customer: {
    name: '',
    phone: '',
    mail: ''
  },
  time: {},
  address: {},
  speed: "fast",
  payment: "cash",
  change: "no_change",
  restaurant: "",
  comment: ""
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOptions: (state, actions) => {
      for (let i in actions.payload) {
        state[i] = actions.payload[i];
      }
    },

    setCustomer: (state, actions) => {
      state.customer[actions.payload.name] = actions.payload.value;
    },

    setAdress: (state, actions) => {
      state.address[actions.payload.name] = actions.payload.value;
    },

    setTime: (state, actions) => {
      state.time[actions.payload.name] = actions.payload.value;
    },

    setChange: (state, actions) => {
      state.change = actions.payload;
    },

    setRestaurant: (state, actions) => {
      state.restaurant = actions.payload;
    },

    setProducts: (state, actions) => {
      state.products = actions.payload;
    },
  }
});

export const { setOptions, setCustomer, setAdress, setTime, setChange, setRestaurant, setProducts } = orderSlice.actions;

export default orderSlice.reducer;
