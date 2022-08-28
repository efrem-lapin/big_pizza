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
  }
});

export const { setOptions, setCustomer, setAdress, setTime } = orderSlice.actions;

export default orderSlice.reducer;
