import { createSlice } from "@reduxjs/toolkit";
import defaultPost from "../data/questions.json";
let post = [...defaultPost];
const initialState = [...post];
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
    likedPost: (state, { payload }) => {
      let likes = parseInt(state[payload].likes) + 1;
      state[payload].likes = likes;
    },
    dislikedPost: (state, { payload }) => {
      let likes = parseInt(state[payload].likes) - 1;
      state[payload].likes = likes;
    },
    addRelpy: (state, { payload }) => {
      state[payload.id].answers.push(payload)
      
    },
  },
});
export const { editPost, likedPost, dislikedPost,addRelpy } = postSlice.actions;

export default postSlice.reducer;
