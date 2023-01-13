import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateRoutineActivity } from "../api/auth";

const EditRoutineActivity = ({ routine, routineActivity }) => {
  const [count, setCount] = useState("");
  const [duration, setDuration] = useState("");

  return (
    <div>
      <form
      //  onSubmit={async (event) => {
      //     try {
      //       event.preventDefault();
      //       const newRoutineActivity = await updateRoutineActivity(
      //         routineId,
      //         count,
      //         duration
      //       );
      //       const routinesActivitiesToFilter = routineAcitivities.filter((routine) => {
      //         return routineId !== routine.id;
      //       })
      //       console.log("filterRoutine: ", routinesToFilter)
      //       setRoutines ([newRoutine, ...routinesToFilter]);
      //       navigate('/my_routines');
      //     } catch (error) {
      //       console.error(error);
      //     }
      //   }}
      >
        <label htmlFor="count">Count</label>
        <input
          value={count}
          type="number"
          placeholder="count"
          min="0"
          onChange={(event) => setCount(parseInt(event.target.value))}
        ></input>
        <label htmlFor="duration">Duration</label>
        <input
          value={duration}
          type="number"
          placeholder="duration"
          min="0"
          onChange={(event) => setDuration(parseInt(event.target.value))}
        ></input>
        <button type="submit">Edit Activity</button>
      </form>
    </div>
  );
};

export default EditRoutineActivity;
