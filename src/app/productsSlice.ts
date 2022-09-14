import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "productsState",
  initialState: {
    products: [
      { id: 1, name: "Молоко", price: 130 },
      { id: 2, name: "Мясо", price: 730 },
      { id: 3, name: "Рыба", price: 430 },
      { id: 4, name: "Хлеб", price: 50 },
    ],
  },
  reducers: {
    addProduct: (state, action) => {
      const product = {
        id: state.products.length + 1,
        name: action.payload.name,
        price: action.payload.price,
      };
      state.products.push(product);
    },
  },
});

export default productsSlice.reducer;
export const { addProduct } = productsSlice.actions;
