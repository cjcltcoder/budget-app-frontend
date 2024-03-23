import React from 'react';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
  return (
    <div>
      <h2>Dashboard Page</h2>
      {/* Dashboard content goes here */}
      <Link to="/profile">Go to Profile Page</Link>
    </div>
  );
};

export default DashboardPage;
