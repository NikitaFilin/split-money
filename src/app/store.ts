import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import productsSlice from "./productsSlice";
import usersSlice from "./usersSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    usersState: usersSlice,
    productsState: productsSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
