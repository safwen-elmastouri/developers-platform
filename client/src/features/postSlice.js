import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
/* import defaultPost from "../data/questions.json";
 */
import axios from "axios";
import { useFetch, post ,handleUpdate} from "../api/axios";

const initialState = {
  isLoading: false,
  post: [],
  error: "",
};
export const fetchPosts = createAsyncThunk("post/fetchPosts", () =>
  useFetch("questions")
);

export const postSlice = createSlice({
  name: "post",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.post = action.payload;
      state.error = "";
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.isLoading = false;
      state.post = [];
      state.error = action.error.message;
    });
  },
  reducers: {
    editPost: (id, state, action) => {
      let currentPost = state.post.find((post) => post === id);
      return {
        ...state,
        post: currentPost,
      };
    },
    publishPost: (state, { payload }) => {
      state.post.unshift(payload);
      post("addpost", payload);
    },
    likedPost: (state, { payload }) => {
      state.post[payload].likes++;
      state.post[payload].liked = true;
      handleUpdate(`${payload}`, state.post[payload])
    },
    dislikedPost: (state, { payload }) => {
      state.post[payload].likes--;
      state.post[payload].liked = false;
    },
    addRelpy: (state, { payload }) => {
      const { id, ...reply } = payload;
      state.post[id].answers.push(reply);
    },
  },
});
export const { editPost, likedPost, dislikedPost, addRelpy, publishPost } =
  postSlice.actions;

export default postSlice.reducer;
