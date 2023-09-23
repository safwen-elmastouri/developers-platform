import { createSlice } from "@reduxjs/toolkit";

const initialState= []


export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      return (
      action.payload
      )
    },
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
