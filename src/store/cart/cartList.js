import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "cartList",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const index = state.cartList.findIndex(item => item.id === action.payload.id);

      // ЕСЛИ ТОВАР УЖЕ ЕСТЬ В КОРЗИНЕ, ТОГДА УВЕЛИЧИВАЕМ ЕГО КОЛЛИЧЕСТВО
      if (index > -1) {
        const isSimilarSize = state.cartList[index].size === action.payload.size;

        state.cartList[index].count++;
      } else  {
        // ИНАЧЕ ГЕНЕРИРУЕМ ИНДИФИКАТОР, УСТАНАВЛИВАЕМ КОЛ-ВО ТОВАРА И ДОБАВЛЯЕМ В КОРЗИНУ
        const idItemCart = Math.random();
        state.cartList.push({ ...action.payload, idItemCart, count: 1 });
      }
    },

    removeProduct: (state, action) => {
      state.cartList = state.cartList.filter(
        (item) => item.idItemCart !== action.payload
      );
    },

    recount: (state, action) => {
      // ИНКРЕМЕНТ ИЛИ ДЕКРЕМЕНТ КОЛ-ВА ТОВАРА
      const index = state.cartList.findIndex(item => item.idItemCart === action.payload.id);

      if (action.payload.increment) state.cartList[index].count++;
      else state.cartList[index].count--;
    },
  },
});

export const {
  setIsCart,
  addProduct,
  removeProduct,
  recount
} = cartSlice.actions;
export default cartSlice.reducer;