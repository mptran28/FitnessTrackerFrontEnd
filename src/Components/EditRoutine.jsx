import React, { useState, useEffect } from "react";
import { updateRoutine } from "../api/auth";
import { useNavigate } from "react-router-dom";

const EditRoutine = ({ routine }) => {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  const navigate = useNavigate();
  const routineId = routine.id;
  console.log("EditRoutine", routine);
  return (
    <div>
      <form
        onSubmit={async (event) => {
          try {
            event.preventDefault();
            const newRoutine = await updateRoutine(
              routineId,
              name,
              goal,
              isPublic
            );
            return newRoutine;
          } catch (error) {
            console.error(error);
          }
        }}
      >
        <label htmlFor="name">Name</label>
        <input
          value={name}
          type="text"
          placeholder="name"
          onChange={(event) => setName(event.target.value)}
        ></input>
        <label htmlFor="description">Description</label>
        <input
          value={goal}
          type="text"
          placeholder="goal"
          onChange={(event) => setGoal(event.target.value)}
        ></input>
        <label htmlFor="isPublic">Is Public</label>
        <input
          value={isPublic}
          type="checkbox"
          onChange={() => setIsPublic((prev) => !prev)}
        ></input>
        <button type="submit"> Edit Routine </button>
      </form>
    </div>
  );
};

export default EditRoutine;
