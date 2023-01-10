import React, { useState } from "react";
import { createNewRoutine } from "../api/auth";

const NewRoutine = () => {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");

  return (
    <div>
      <form
        onSubmit={async (event) => {
          try {
            event.preventDefault();
            const newRoutine = await createNewRoutine(name, goal);
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
        <button type="submit">Create Routine</button>
      </form>
    </div>
  );
};

export default NewRoutine;
