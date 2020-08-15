import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../form.css";

const CreateExercise = (props) => {
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(["test user", "second user"]);
    setUsername("test user");
  }, []);

  const onSubmit = (e) => {
    console.log("Submit");
    e.preventDefault();

    const exercise = {
      username,
      description,
      duration,
      date,
    };

    console.log(exercise);
    // window.location = "/";
  };

  return (
    <div>
      <h3>Create New Exercise Log</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Username: </span>
          </div>
          <select
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          >
            {users.map((user) => (
              <option key={user} value={user}>
                {user}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Description: </span>
          </div>
          <input
            type="text"
            value={description}
            className="form-control"
            onChange={(e) => setDescription(e.target.value)}
            required
          ></input>
        </div>
        <div className="form-group input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Duration (minutes): </span>
          </div>
          <input
            type="text"
            value={duration}
            className="form-control"
            onChange={(e) => setDuration(e.target.value)}
            required
          ></input>
        </div>
        <div className="form-group input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Date: </span>
          </div>
          <DatePicker
            selected={date}
            className="form-control date"
            onChange={setDate}
          />
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="Create Exercise Log"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateExercise;
