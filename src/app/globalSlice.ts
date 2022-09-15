import { createSlice } from "@reduxjs/toolkit";
import { TProduct, TUser } from "../components/coms/UserCard/types";

const initialUsers: TUser[] = [
  { id: 1, name: "Никита" },
  { id: 2, name: "Олег" },
  { id: 3, name: "Алина" },
  { id: 4, name: "Наташа" },
];

const initialProducts: TProduct[] = [
  {
    id: 1,
    name: "Молоко",
    price: 100,
    chosenProductUsers: [],
    averageCost: 100,
  },
  { id: 2, name: "Мясо", price: 200, chosenProductUsers: [], averageCost: 200 },
  { id: 3, name: "Рыба", price: 300, chosenProductUsers: [], averageCost: 300 },
  { id: 4, name: "Хлеб", price: 400, chosenProductUsers: [], averageCost: 400 },
];

const globalSlice = createSlice({
  name: "globalState",
  initialState: {
    products: initialProducts,
    users: initialUsers,
  },
  reducers: {
    addUser: (state, action) => {
      const user = { id: state.users.length + 1, name: action.payload };
      state.users.push(user);
    },

    deleteUser: (state, action) => {
      const userId = action.payload;
      state.users = state.users.filter((user) => user.id !== userId);

      state.products.map(
        (product) =>
          (product.chosenProductUsers = product.chosenProductUsers.filter(
            (chosenUser) => chosenUser !== userId
          ))
      );
    },

    addProduct: (state, action) => {
      const product = {
        id: state.products.length + 1,
        name: action.payload.name,
        price: action.payload.price,
        chosenProductUsers: [],
        averageCost: action.payload.price,
      };
      state.products.push(product);
    },

    selectProduct: (state, action) => {
      const { userId, productId, productChecked } = action.payload;

      if (productChecked) {
        state.products
          .find((product) => product.id === productId)
          ?.chosenProductUsers.push(userId);
      } else {
        state.products.map(
          (product) =>
            (product.chosenProductUsers =
              product.id === productId
                ? product.chosenProductUsers.filter(
                    (chosenUser) => chosenUser !== userId
                  )
                : product.chosenProductUsers)
        );
      }

      // Пересчитываем averageCost по товарам
      // state.products.map(
      //   (product) =>
      //     (product.averageCost = Math.ceil(
      //       product.price / product.chosenProductUsers.length
      //     ))
      // );
    },

    selectAllProducts: (state, action) => {
      const userId = parseInt(action.payload.userId);

      if (action.payload.isSelectedAllProducts) {
        state.products.map(
          (product) =>
            (product.chosenProductUsers = product.chosenProductUsers.filter(
              (chosenUser) => chosenUser !== userId
            ))
        );
      } else {
        state.products.map((product) => {
          const isUserIdThere = !!product.chosenProductUsers.find(
            (chosenUser) => chosenUser === userId
          );

          if (isUserIdThere) {
            return product.chosenProductUsers;
          }

          return product.chosenProductUsers.push(userId);
        });
      }

      // Пересчитываем averageCost по товарам
      // state.products.map(
      //   (product) =>
      //     (product.averageCost = Math.ceil(
      //       product.price / product.chosenProductUsers.length
      //     ))
      // );
    },

    recalculateAmount: (state) => {
      state.products.map(
        (product) =>
          (product.averageCost = Math.ceil(
            product.price / product.chosenProductUsers.length
          ))
      );
    },
  },
});

export default globalSlice.reducer;
export const {
  addUser,
  deleteUser,
  addProduct,
  selectAllProducts,
  selectProduct,
  recalculateAmount,
} = globalSlice.actions;
