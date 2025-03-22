// 

import React, { useState, useEffect } from "react";
import axios from "axios";

const FetchTop = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    // Add your API token here (retrieve it from a secure place)
    const API_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQyNjI3NTA3LCJpYXQiOjE3NDI2MjcyMDcsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImVhMGQ2ZmE4LThhNmEtNDA3Zi1hODgzLWVjODM3ZDExNGFjNyIsInN1YiI6IjIyYmVjeTAxMUBrYWhlZHUuZWR1LmluIn0sImNvbXBhbnlOYW1lIjoiS2FycGFnYW0gQWNhZGVteSBvZiBIaWdoZXIgRWR1Y2F0aW9uIiwiY2xpZW50SUQiOiJlYTBkNmZhOC04YTZhLTQwN2YtYTg4My1lYzgzN2QxMTRhYzciLCJjbGllbnRTZWNyZXQiOiJBeXJNdmhJQnZSWk96Y1BQIiwib3duZXJOYW1lIjoiRGFudXNoIFMiLCJvd25lckVtYWlsIjoiMjJiZWN5MDExQGthaGVkdS5lZHUuaW4iLCJyb2xsTm8iOiIyMkJFQ1kwMTEifQ.c0T8GvT277zqJX-i2amFXoNRYWubvEPy2yVtTCkTpTk";  // Replace with actual token

    const fetchUsers = async () => {
        try {
            const response = await axios.get("http://20.244.56.144/test/users", {
                headers: {
                    Authorization: `Bearer ${API_TOKEN}`,  // Pass the token
                    "Content-Type": "application/json",
                },
            });
            setUsers(response.data);
        } catch (err) {
            console.error("Error fetching users:", err.message);
            if (err.response && err.response.status === 401) {
                setError("Unauthorized access. Please check your API token.");
            } else {
                setError("Failed to load users. Please try again.");
            }
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    if (error) {
        return <div className="error-message">{error}</div>;
    }

    return (
        <div>
            <h2>Top Users</h2>
            <ul>
                {users.length > 0 ? (
                    users.map((user, index) => <li key={index}>{user.name}</li>)
                ) : (
                    <p>Loading users...</p>
                )}
            </ul>
        </div>
    );
};

export default FetchTop;




