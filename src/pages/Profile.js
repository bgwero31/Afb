import React from "react";

export default function Profile() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Profile</h1>
      <p>This is your Profile page.</p>

      {/* Example: User info layout */}
      <div style={{ marginTop: "20px" }}>
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Email:</strong> johndoe@example.com</p>
        {/* Add more profile details or edit form here */}
      </div>
    </div>
  );
}
