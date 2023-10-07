import { createSlice } from "@reduxjs/toolkit";
import defaultPost from "../data/questions.json";
const initialState = [...defaultPost];

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    editPost: (id, state, action) => {
      let currentPost = state.post.find((post) => post === id);
      return {
        ...state,
        post: currentPost,
      };
    },
    publishPost: (state, { payload }) => {
      state.unshift(payload);
      
    },
    likedPost: (state, { payload }) => {
      state[payload].likes++;
      state[payload].liked = true;
    },
    dislikedPost: (state, { payload }) => {
      state[payload].likes--;
      state[payload].liked = false;
    },
    addRelpy: (state, { payload }) => {
      const { id, ...reply } = payload;
      state[id].answers.push(reply);
    },
  },
});
export const { editPost, likedPost, dislikedPost, addRelpy, publishPost } =
  postSlice.actions;

export default postSlice.reducer;
