import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createNewRoutine } from "../api/auth";

const NewRoutine = ({ routines, setRoutines }) => {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  const navigate = useNavigate();
  return (
    <div>
      <form
        onSubmit={async (event) => {
          try {
            event.preventDefault();
            const newRoutine = await createNewRoutine({ isPublic, name, goal });
            setRoutines([newRoutine, ...routines]);
            navigate("/routines");
          } catch (error) {
            console.error(error);
          }
        }}
      >
        <h1>Create New Routine</h1>
        <label htmlFor="title">Name</label>
        <input
          value={name}
          type="text"
          required
          placeholder="name"
          onChange={(event) => setName(event.target.value)}
        ></input>
        <label htmlFor="description">Goal</label>
        <input
          value={goal}
          type="text"
          required
          placeholder="goal"
          onChange={(event) => setGoal(event.target.value)}
        ></input>
        <label htmlFor="willDeliver">Is Public</label>
        <input
          value={isPublic}
          type="checkbox"
          onChange={() => setIsPublic((prev) => !prev)}
        ></input>

        <button type="submit">Create Routine</button>
      </form>
    </div>
  );
};

export default NewRoutine;
