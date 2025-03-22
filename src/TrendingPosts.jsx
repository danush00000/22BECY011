import React, { useEffect, useState } from "react";
import axios from "axios";

const TrendingPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        const trending = response.data.posts.sort((a, b) => b.comments.length - a.comments.length).slice(0, 3);
        setPosts(trending);
      })
      .catch(error => console.error("Error fetching posts:", error));
  }, []);

  return (
    <div className="p-4 bg-white shadow-md rounded">
      <h2 className="text-xl font-bold mb-2">Trending Posts</h2>
      {posts.map(post => (
        <div key={post.id} className="border-b py-2">
          <p className="font-semibold">{post.content}</p>
          <p className="text-sm text-gray-500">Comments: {post.comments.length}</p>
        </div>
      ))}
    </div>
  );
};

export default TrendingPosts;
