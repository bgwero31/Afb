import React from "react";

export default function Chatroom() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Chatroom</h1>
      <p>This is your Chatroom page.</p>

      {/* Example: Basic chat UI layout */}
      <div style={{ border: "1px solid #ccc", padding: "10px", marginTop: "20px" }}>
        <div style={{ marginBottom: "10px" }}>
          <strong>User1:</strong> Hey there!
        </div>
        <div style={{ marginBottom: "10px" }}>
          <strong>You:</strong> Hi! Welcome to the chat.
        </div>
        {/* Add your real chat logic here later */}
      </div>
    </div>
  );
}
