import { configureStore } from "@reduxjs/toolkit";
import postReducer, { singlePostSlice } from "./features/postSlice";

export default configureStore({
  reducer: {
    posts: postReducer,
    singlePost: singlePostSlice.reducer,
  },
});
