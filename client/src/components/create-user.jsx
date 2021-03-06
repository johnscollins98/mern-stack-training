import React, { useState } from "react";
import axios from "axios";

const CreateUser = (props) => {
  const [username, setUsername] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const user = {
      username,
    };

    console.log(user);
    axios
      .post("http://localhost:5000/users/add", user)
      .then((res) => console.log(res.data));

    setUsername("");
  };

  return (
    <div>
      <h3>Create New User</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group input-group mb-3">
          <div className="input-group-prepend mb3">
            <span className="input-group-text">Username</span>
          </div>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Create User"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
