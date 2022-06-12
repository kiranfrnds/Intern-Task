import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPosts, getSinglePost } from "./redux/features/postSlice";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function Post() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const loading = useSelector((state) => state.posts.loading);

  return (
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
  );
}

export default Post;
