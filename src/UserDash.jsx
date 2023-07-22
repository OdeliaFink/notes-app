// UserDashboard.js
import React from 'react';

const UserDashboard = ({ username }) => {
  return (
    <div>
      <h2>Welcome, {username}!</h2>
      {/* Add your user-specific dashboard content here */}
    </div>
  );
};

export default UserDashboard;
