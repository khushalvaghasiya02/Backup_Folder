import React from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const { userData } = location.state || {};

  return (
    <div className="home-container">
      <h1>Welcome to Home Page</h1>
      {userData ? (
        <div>
          <h2>User Information</h2>
          <p>Email: {userData.email}</p>
          {/* Display other user data as needed */}
        </div>
      ) : (
        <p>No user data available</p>
      )}
    </div>
  );
};

export default Home;
