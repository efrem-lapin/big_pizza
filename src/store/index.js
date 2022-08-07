import { configureStore } from "@reduxjs/toolkit";
import scrollHeaderSlice from "./slices/scrollHeaderSlice";
import dropListSlice from "./slices/dropListSlice";
import modalSlice from "./slices/modalSlice";
import filterSlice from "./slices/filterSlice";
import cartSlice from "./slices/cartSlice";
import accountSlice from "./slices/accountSlice";
import menuMobileSlice from "./slices/menuMobileSlice";
import signSlice from "./slices/signSlice";
import prodOptionsSlice from "./slices/prodOptionsSlice";
import popupSlice from "./slices/popupSlice";
import orderSlice from "./slices/orderSlice";
import extrasProdSlice from "./slices/extrasProdSlice";
import ingredientsProdSlice from "./slices/ingredientsProdSlice";

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
    extrasProd: extrasProdSlice,
    ingredientsProd: ingredientsProdSlice
  },
});
