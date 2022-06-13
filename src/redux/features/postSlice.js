import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  const response = await fetch("https://reqres.in/api/users?page=1");
  const posts = await response.json();
  return posts.data;
});

export const getSinglePost = createAsyncThunk("posts/getPost", async (id) => {
  const response = await fetch(`https://reqres.in/api/users/${id}`);
  const post = await response.json();
  return post.data;
});

export const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    loading: false,
    error: null,
  },
  reducers: {
    getPost: (state, action) => {
      state.posts = action.payload;
    },
  },
  extraReducers: {
    [getPosts.pending]: (state, action) => {
      state.loading = true;
    },
    [getPosts.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.loading = false;
    },
    [getPosts.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
  },
});

export const singlePostSlice = createSlice({
  name: "singlePost",
  initialState: {
    post: [],
    loading: false,
    error: null,
  },
  reducers: {
    getSinglePost: (state, action) => {
      state.post = action.payload;
    },
  },
  extraReducers: {
    [getSinglePost.pending]: (state, action) => {
      state.loading = true;
    },
    [getSinglePost.fulfilled]: (state, action) => {
      state.post = action.payload;
      state.loading = false;
    },
    [getSinglePost.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
  },
});

export default postSlice.reducer;
export const { getPost, getSingleSlot } = postSlice.actions;
