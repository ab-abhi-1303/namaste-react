import { useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0);
  return (
    <div className="user-card">
      <h1>Count: {count}</h1>
      <h1>User Profile</h1>
      <h1>Name: {name}</h1>
      <p>This is the UserProfile component.</p>
    </div>
  );
};

export default User;
