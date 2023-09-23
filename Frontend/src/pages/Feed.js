import React, { useState, useEffect } from "react";
import useAxios from "../utils/useAxios";
import Post from "../components/Post";

const Feed = () => {
  let [posts, setPosts] = useState([]);

  let api = useAxios();

  useEffect(() => {
    getPosts();
  }, []);

  let getPosts = async () => {
    let response = await api.get("/api/posts/", {headers:{ 
      'Content-Type': 'application/json;' }});

    if (response.status === 200) {
      setPosts(response.data);
    }
  };

  return (
    <div>
      {posts.map((post) => {
        return <Post post_data={post} />;
      })}
    </div>
  );
};

export default Feed;
