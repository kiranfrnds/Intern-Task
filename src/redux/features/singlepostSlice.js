import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getSinglePost = createAsyncThunk("posts/getPost", async (id) => {
  const response = await fetch(`https://reqres.in/api/users/${id}`);
  const post = await response.json();
  return post.data;
});

export const singlePostSlice = createSlice({
  name: "post",
  initialState: {
    post: [],
    loading: false,
    error: null,
  },
  reducers: {
    getPost: (state, action) => {
      state.posts = action.payload;
    },
    getSinglePost: (state, action) => {
      state.posts = action.payload;
    },
  },
  extraReducers: {
    [getSinglePost.pending]: (state, action) => {
      state.loading = true;
    },
    [getSinglePost.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.loading = false;
    },
    [getSinglePost.rejected]: (state, action) => {
      state.error = action.error;
      state.loading = false;
    },
  },
});

export default singlePostSlice.reducer;
export const { getSingleSlot } = singlePostSlice.actions;
