import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
        <div className="form-group">
          <label>Username: </label>
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
        <div className="form-group">
          <label>Description:</label>
          <input
            type="text"
            value={description}
            className="form-control"
            onChange={(e) => setDescription(e.target.value)}
            required
          ></input>
        </div>
        <div className="form-group">
          <label>Duration (in minutes):</label>
          <input
            type="text"
            value={duration}
            className="form-control"
            onChange={(e) => setDuration(e.target.value)}
            required
          ></input>
        </div>
        <div className="form-group">
          <label>Date:</label>
          <div>
            <DatePicker selected={date} onChange={setDate} />
          </div>
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
