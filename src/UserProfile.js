import React from 'react';

const UserProfile = ({ user }) => {
  // The user prop would contain information about the user

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      {/* Display other user information here */}
    </div>
  );
}

export default UserProfile;

