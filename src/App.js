import "./App.css";
import React, { useEffect } from "react";
import { getPosts, getSinglePost } from "./redux/features/postSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const loading = useSelector((state) => state.posts.loading);
  const singlePost = useSelector((state) => state.singlePost.post);
  const loadingSinglePost = useSelector((state) => state.singlePost.loading);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const setActiveId = (id) => {
    dispatch(getSinglePost(id));
    console.log(loadingSinglePost);
  };

  return (
    <>
      {loading ? (
        <h1 style={{ "text-align": "center" }}> Loading...</h1>
      ) : (
        <div className="App">
          <h1>Posts</h1>
          <div className="top-container">
            {loadingSinglePost ? (
              <h1> Loading...</h1>
            ) : (
              <div>
                <h1>Post Id: {singlePost.id}</h1>
                <h1>First Name: {singlePost.first_name}</h1>
                <h1>E-Mail: {singlePost.email}</h1>
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
      )}
    </>
  );
}

export default React.memo(App);
