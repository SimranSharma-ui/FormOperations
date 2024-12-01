import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function UpdateBlog() {
  const navigateTo = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState({
    Firstname: "",
    Lastname: "",
    Email: "",
    PhoneNumber: "",
    Age: "",
  });

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/User/getOneUser/${id}`
        );
        setUser(response.data);
        setIsLoading(false);
      } catch (error) {
        setError("Error fetching user data.");
        setIsLoading(false);
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:8000/api/User/update/${id}`,
        user
      );
      console.log("User updated:", response.data);

      navigateTo("/");
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  if (isLoading) {
    return <div>Loading user data...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const Delete = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/api/User/delete/${id}`
      );
      console.log("User deleted:", response.data);
      setUser(null);
      navigateTo("/");
    } catch (err) {
      console.error("Error deleting user:", err);
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">
          Update User
        </h1>
        <form onSubmit={handleUpdate}>
          {/* First Name */}
          <div className="mb-4">
            <label className="block font-semibold">First Name</label>
            <input
              type="text"
              name="Firstname"
              value={user.Firstname}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Last Name */}
          <div className="mb-4">
            <label className="block font-semibold">Last Name</label>
            <input
              type="text"
              name="Lastname"
              value={user.Lastname}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block font-semibold">Email</label>
            <input
              type="email"
              name="Email"
              value={user.Email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <label className="block font-semibold">Phone Number</label>
            <input
              type="text"
              name="PhoneNumber"
              value={user.PhoneNumber}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Age */}
          <div className="mb-4">
            <label className="block font-semibold">Age</label>
            <input
              type="number"
              name="Age"
              value={user.Age}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="mt-4 flex justify-between">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none"
            >
              Save Changes
            </button>
            <button
              onClick={Delete}
              className="bg-red-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-red-700 focus:outline-none"
            >
              Delete User
            </button>

            <button
              type="button"
              onClick={() => navigateTo("/")}
              className="bg-gray-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-700 focus:outline-none"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateBlog;
