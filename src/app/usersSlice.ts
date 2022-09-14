import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "usersState",
  initialState: {
    users: [
      { id: 1, name: "Никита" },
      { id: 2, name: "Олег" },
      { id: 3, name: "Алина" },
      { id: 4, name: "Наташа" },
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
  },
});

export default usersSlice.reducer;
export const { addUser, deleteUser } = usersSlice.actions;

// // Can still subscribe to the store
// store.subscribe(() => console.log(store.getState()));

// // Still pass action objects to `dispatch`, but they're created for us
// store.dispatch(incremented());
// // {value: 1}
// store.dispatch(incremented());
// // {value: 2}
// store.dispatch(decremented());
// // {value: 1}
