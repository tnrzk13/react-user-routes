import React from "react";
import "./App.css";
import { Link, useParams } from "react-router-dom";

export function Users({ users }) {
  return (
    <div>
      <h1>Users</h1>
      {users.map((user) => (
        <div key={user.id} className="user-item">
          {" "}
          <Link to={`/users/${user.id}`}>{user.name}</Link>
        </div>
      ))}
    </div>
  );
}

export function UserDetail({ users }) {
  const { id } = useParams();
  // Find the user by 'id'
  const user = users.find((u) => u.id === parseInt(id));

  return (
    <div>
      <h1>{user?.name}</h1>
      <p>Email: {user?.email}</p>
    </div>
  );
}

