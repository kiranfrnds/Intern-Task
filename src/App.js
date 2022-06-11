import "./App.css";
import React, { useEffect, useState } from "react";
import { getPosts, getSinglePost } from "./redux/features/postSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const [id, setId] = useState();
  const posts = useSelector((state) => state.posts.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const setActiveId = (id) => {
    setId(id);
    dispatch(getSinglePost(id));
    console.log(id);
  };

  return (
    <div className="App">
      <h1>Posts</h1>
      <div>
        {posts.loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            <h1>{posts.id}</h1>
            <h1>{posts.name}</h1>
            <h1>{posts.email}</h1>
          </div>
        )}
      </div>

      <ul>
        {posts &&
          posts.length &&
          posts?.map((post) => (
            <li key={post.id} onClick={(id) => setActiveId(post.id)}>
              <h1>{post.id}</h1>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
