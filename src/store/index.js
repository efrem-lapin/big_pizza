import { configureStore } from "@reduxjs/toolkit";
import scrollHeaderSlice from "./scrollHeaderSlice";
import dropListSlice from "./dropListSlice";
import modalSlice from "./modalSlice";
import filterSlice from "./filterSlice";
import cartSlice from "./cartSlice";
import accountSlice from "./accountSlice";
import menuMobileSlice from "./menuMobileSlice";
import signSlice from "./signSlice";
import prodOptionsSlice from "./prodOptionsSlice";
import popupSlice from "./popupSlice";
import orderSlice from "./orderSlice";

export default configureStore({
  reducer: {
    scrollHeader: scrollHeaderSlice,
    dropList: dropListSlice,
    modal: modalSlice,
    filter: filterSlice,
    cart: cartSlice,
    account: accountSlice,
    menuMobile: menuMobileSlice,
    sign: signSlice,
    prodOptions: prodOptionsSlice,
    popup: popupSlice,
    order: orderSlice,
  },
});
