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
