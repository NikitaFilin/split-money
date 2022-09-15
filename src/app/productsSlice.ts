import { createSlice } from "@reduxjs/toolkit";
import { TProduct } from "../components/coms/UserCard/types";

const initialProducts: TProduct[] = [
  {
    id: 1,
    name: "Молоко",
    price: 130,
    chosenProductUsers: [],
    averageCost: 130,
  },
  { id: 2, name: "Мясо", price: 730, chosenProductUsers: [], averageCost: 730 },
  { id: 3, name: "Рыба", price: 430, chosenProductUsers: [], averageCost: 430 },
  { id: 4, name: "Хлеб", price: 50, chosenProductUsers: [], averageCost: 50 },
];

const productsSlice = createSlice({
  name: "productsState",
  initialState: {
    products: initialProducts,
  },
  reducers: {
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
    },
  },
});

export default productsSlice.reducer;
export const { addProduct, selectAllProducts, selectProduct } =
  productsSlice.actions;
