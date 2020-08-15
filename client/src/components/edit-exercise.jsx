import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";
import "../form.css";

const CreateExercise = (props) => {
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    axios
      .get(`http://localhost:5000/exercises/${props.match.params.id}`)
      .then((res) => {
        setUsername(res.data.username);
        setDescription(res.data.description);
        setDuration(res.data.duration);
        setDate(new Date(res.data.date));
      });
  }, [props.match.params.id]);

  const onSubmit = (e) => {
    e.preventDefault();

    const exercise = {
      username,
      description,
      duration,
      date,
    };

    console.log(exercise);
    axios
      .put(
        `http://localhost:5000/exercises/update/${props.match.params.id}`,
        exercise
      )
      .then((res) => console.log(res));

    window.location = "/";
  };

  return (
    <div>
      <h3>Edit Exercise Log</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Username</span>
          </div>
          <input
            type="text"
            className="form-control"
            value={username}
            disabled
            required
          ></input>
        </div>
        <div className="form-group input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Description</span>
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
            <span className="input-group-text">Duration (minutes)</span>
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
            <span className="input-group-text">Date</span>
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
            value="Update Exercise Log"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateExercise;
