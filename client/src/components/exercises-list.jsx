import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Exercise from "./exercise";

const ExercisesList = (props) => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/exercises")
      .then((res) => {
        setExercises(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteExercise = (id) => {
    axios
      .delete(`http://localhost:5000/exercises/${id}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    const newExercises = exercises.filter((exercise) => exercise._id !== id);
    setExercises(newExercises);
  };

  const exerciseList = () =>
    exercises.map((exercise) => (
      <Exercise
        exercise={exercise}
        deleteExercise={deleteExercise}
        key={exercise._id}
      />
    ));

  return (
    <div>
      <h3>Logged Exercises</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Username</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{exerciseList()}</tbody>
      </table>
    </div>
  );
};

export default ExercisesList;
