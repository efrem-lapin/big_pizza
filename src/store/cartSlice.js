import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCart: false,
  list: [],
  sum: 0,
};

// Ф-ЦИЯ ДЛЯ ПОДСЧЕТА СУММЫ ВСЕХ ТОВАРОВ
const calcSum = (state) => {
  state.sum = state.list.reduce((prev, item) => prev + (item.sum || item.price) * item.count, 0);
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // ЭТО НУЖНО УБРАТЬ
    setIsCart: (state, action) => {
      state.isCart = action.payload;
    },

    addProduct: (state, action) => {
      const index = state.list.findIndex(item => item.id === action.payload.id);

      // ЕСЛИ ТОВАР УЖЕ ЕСТЬ В КОРЗИНЕ, ТОГДА УВЕЛИЧИВАЕМ ЕГО КОЛЛИЧЕСТВО
      if (index > -1) {
        const isSimilar = JSON.stringify(state.list[index]) === JSON.stringify(action.payload);
        if (isSimilar) state.list[index].count++;
      } else  {
        // ИНАЧЕ ГЕНЕРИРУЕМ ИНДИФИКАТОР, УСТАНАВЛИВАЕМ КОЛ-ВО ТОВАРА И ДОБАВЛЯЕМ В КОРЗИНУ
        const idItemCart = Math.random();
        state.list.push({ ...action.payload, idItemCart, count: 1 });
      }
      calcSum(state);
    },

    removeProduct: (state, action) => {
      state.list = state.list.filter(
        (item) => item.idItemCart !== action.payload
      );
      calcSum(state);
    },

    recount: (state, action) => {
      // ИНКРЕМЕНТ ИЛИ ДЕКРЕМЕНТ КОЛ-ВА ТОВАРА
      const index = state.list.findIndex(item => item.idItemCart === action.payload.id);

      if (action.payload.increment) state.list[index].count++;
      else state.list[index].count--;

      calcSum(state);
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
