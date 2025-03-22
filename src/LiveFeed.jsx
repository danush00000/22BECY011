


import React, { useEffect, useState } from "react";
import axios from "axios";

const API_BASE_URL = "https://jsonplaceholder.typicode.com/users"; // Change if needed


const Feed = () => {
  const [posts, setPosts] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = () => {
      axios.get(`${API_BASE_URL}/feed`)
        .then(response => {
          if (response.data && response.data.posts) {
            setPosts(response.data.posts);
            setError(null);
          } else {
            setError("Invalid response format");
          }
        })
        .catch(error => {
          console.error("Error fetching feed:", error);
          setError("Unable to fetch live feed. Please try again later.");
        });
    };

    fetchPosts();
    const interval = setInterval(fetchPosts, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 bg-white shadow-md rounded">
      <h2 className="text-xl font-bold mb-2">Live Feed</h2>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        posts.length > 0 ? (
          posts.map(post => (
            <div key={post.id} className="border-b py-2">
              <p className="font-semibold">{post.content}</p>
              <p className="text-sm text-gray-500">By: {post.user}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No posts available.</p>
        )
      )}
    </div>
  );
};

export default Feed;
