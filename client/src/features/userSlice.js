import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    updateUser: (state, { payload }) => {
      return { state, ...payload };
    },
  },
});

export const { addUser, updateUser } = userSlice.actions;

export default userSlice.reducer;
