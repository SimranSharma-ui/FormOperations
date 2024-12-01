import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/User/getAllUsers"
        );
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">All Users</h1>
      <div className="space-y-4">
        {users.length > 0 ? (
          users.map((user) => (
            <div key={user._id} className="border p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold">
                <Link
                  to={`/user/${user._id}`}
                  className="text-blue-500 hover:underline"
                >
                  {user.Firstname} {user.Lastname}
                </Link>
              </h2>
              <p>
                <strong>Email:</strong> {user.Email}
              </p>
              <p>
                <strong>Phone:</strong> {user.PhoneNumber}
              </p>
              <p>
                <strong>Age:</strong> {user.Age}
              </p>
            </div>
          ))
        ) : (
          <p>No users found.</p>
        )}
        <Link to="/Form">
          <button className="w-40 mt-9 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Create User
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AllUsers;
