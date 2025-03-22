


import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TopUsers from "./FetchTop";
import TrendingPosts from "./TrendingPosts";
import Feed from "./LiveFeed";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-4">
        <nav className="flex justify-center space-x-4 mb-4">
          <Link className="px-4 py-2 bg-blue-500 text-white rounded" to="/">Top Users</Link>
          <Link className="px-4 py-2 bg-green-500 text-white rounded" to="/trending">Trending Posts</Link>
          <Link className="px-4 py-2 bg-purple-500 text-white rounded" to="/feed">Feed</Link>
        </nav>
        
        <Routes>
          <Route path="/" element={<TopUsers />} />
          <Route path="/trending" element={<TrendingPosts />} />
          <Route path="/feed" element={<Feed />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

