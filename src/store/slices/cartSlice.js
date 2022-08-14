import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCart: false,
  list: [],
  sum: 0,
};

// Ф-ЦИЯ ДЛЯ ПОДСЧЕТА СУММЫ ВСЕХ ТОВАРОВ
const calcSum = (state) => {
  state.sum = state.list.reduce((prev, item) => prev + (item.product.sum || item.product.price) * item.count, 0);
}

// {idCartItem: string, product: {}, count: 0}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // ЭТО НУЖНО УБРАТЬ
    setIsCart: (state, action) => {
      state.isCart = action.payload;
    },

    addProduct: (state, action) => {
      // ИЩЕМ ПОХОЖИЙ ТОВАР В КОРЗИНЕ
      const newProd = action.payload;
      const index = state.list.findIndex((item => JSON.stringify(item.product) == JSON.stringify(newProd)));

      // ЕСЛИ ТОВАР УЖЕ ЕСТЬ В КОРЗИНЕ, ТО УВЕЛИЧИВАЕМ ЕГО КОЛ-ВО,
      // ИНАЧЕ СОЗДАЕМ НОВЫЙ ТОВАР: ПРИСВАИВАЕМ ID И УКАЗЫВАЕМ КОЛ-ВО ТОВАРА РАВНОЕ 1
      if (index !== -1) {
        state.list[index].count++;
      } else {
        state.list.push({id: `cartItem${Math.random()}`, count: 1, product: newProd});
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
      // ИНКРЕМЕНТ И ДЕКРЕМЕНТ КОЛ-ВА ТОВАРА
      const index = state.list.findIndex(item => item.id === action.payload.id);

      if (action.payload.increment) state.list[index].count++;
      else {
        if (state.list[index].count <= 1) state.list.splice(index, 1);
        else state.list[index].count--;
      }

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
