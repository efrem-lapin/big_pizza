import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sum: 0,
  devilery: true,
  products: [],
  customer: {
    name: '',
    phone: '',
    mail: ''
  },
  addres: {},
  time: "",
  payment: "",
  change: false,
  restaurant: "",
  comment: ""
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOptions: (state, actions) => {
      const name = actions.payload.name;
      state[name] = actions.payload.value;

      console.log(actions.payload.name)
    },

    setCustomer: (state, actions) => {
      state.customer[actions.payload.name] = actions.payload.value;
    }
  },
});

export const { setOptions, setCustomer } = orderSlice.actions;

export default orderSlice.reducer;
