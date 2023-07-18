import React from 'react';
import { useParams } from 'react-router-dom';

const UserPage = () => {
  const { userId } = useParams();

  // You can fetch user data based on the userId here or use the data from your service

  return (
    <div>
      <h2>User's Individual Page (User ID: {userId})</h2>
      {/* Render the user-specific content here */}
    </div>
  );
};

export default UserPage;
