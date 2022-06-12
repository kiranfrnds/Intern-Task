import "./App.css";
import React, { useEffect, useState } from "react";
import { getPosts, getSinglePost } from "./redux/features/postSlice";
import { useDispatch, useSelector } from "react-redux";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function App() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const loading = useSelector((state) => state.posts.loading);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const setActiveId = (id) => {
    dispatch(getSinglePost(id));
    console.log(id);
  };

  return (
    <div className="App">
      <h1>Posts</h1>
      <div className="top-container">
        {loading ? (
          <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <h1>
              <Skeleton count={3} />
            </h1>
          </SkeletonTheme>
        ) : (
          <div>
            <h1>Post Id: {posts.id}</h1>
            <h1>First Name: {posts.first_name}</h1>
            <h1>E-Mail: {posts.email}</h1>
          </div>
        )}
      </div>
      <div className="container ">
        {posts &&
          posts.length &&
          posts.map((post) => (
            <h1
              className="button"
              key={post.id}
              onClick={(id) => setActiveId(post.id)}
            >
              <h1>{post.id}</h1>
            </h1>
          ))}
      </div>
    </div>
  );
}

export default React.memo(App);
