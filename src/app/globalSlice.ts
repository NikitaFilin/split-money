import { createSlice } from "@reduxjs/toolkit";
import { TProduct, TUser } from "../components/coms/UserCard/types";
import uniqid from "uniqid";

const initialUsers: TUser[] = [
  { id: "test-1", name: "Никита" },
  { id: "test-2", name: "Олег" },
  { id: "test-3", name: "Алина" },
  { id: "test-4", name: "Наташа" },
];

const initialProducts: TProduct[] = [
  {
    id: "test-product-1",
    name: "Молоко",
    price: 100,
    chosenProductUsers: [],
    averageCost: 100,
  },
  {
    id: "test-product-2",
    name: "Мясо",
    price: 200,
    chosenProductUsers: [],
    averageCost: 200,
  },
  {
    id: "test-product-3",
    name: "Рыба",
    price: 300,
    chosenProductUsers: [],
    averageCost: 300,
  },
  {
    id: "test-product-4",
    name: "Хлеб",
    price: 400,
    chosenProductUsers: [],
    averageCost: 400,
  },
];

const globalSlice = createSlice({
  name: "globalState",
  initialState: {
    products: initialProducts,
    users: initialUsers,
  },
  reducers: {
    addUser: (state, action) => {
      const uniqueId = uniqid();
      const user = { id: uniqueId, name: action.payload };
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
      const uniqueId = uniqid();

      const product = {
        id: uniqueId,
        name: action.payload.name,
        price: action.payload.price,
        chosenProductUsers: [],
        averageCost: action.payload.price,
      };
      state.products.push(product);
    },

    removeProduct: (state, action) => {
      const productId = action.payload;
      state.products = state.products.filter(
        (product) => product.id !== productId
      );
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
    },

    selectAllProducts: (state, action) => {
      const userId = action.payload.userId;

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
  removeProduct,
  selectAllProducts,
  selectProduct,
  recalculateAmount,
} = globalSlice.actions;
