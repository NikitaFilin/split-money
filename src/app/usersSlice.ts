import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "globalState",
  initialState: {
    users: [
      { id: 1, name: "Никита" },
      { id: 2, name: "Олег" },
      { id: 3, name: "Алина" },
      { id: 4, name: "Наташа" },
    ],
    products: [
      { id: 1, name: "Молоко", price: 130 },
      { id: 2, name: "Мясо", price: 730 },
      { id: 3, name: "Рыба", price: 430 },
      { id: 4, name: "Хлеб", price: 50 },
    ],
  },
  reducers: {
    addUser: (state, action) => {
      const user = { id: state.users.length + 1, name: action.payload };
      state.users.push(user);
    },
    deleteUser: (state, action) => {
      const userId = action.payload;
      state.users = state.users.filter((user) => user.id !== userId);
    },
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

export default usersSlice.reducer;
export const { addUser, deleteUser, addProduct } = usersSlice.actions;

// // Can still subscribe to the store
// store.subscribe(() => console.log(store.getState()));

// // Still pass action objects to `dispatch`, but they're created for us
// store.dispatch(incremented());
// // {value: 1}
// store.dispatch(incremented());
// // {value: 2}
// store.dispatch(decremented());
// // {value: 1}
