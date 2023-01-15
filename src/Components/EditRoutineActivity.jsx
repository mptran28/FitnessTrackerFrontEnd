import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  updateRoutineActivity,
  getAllActivities,
  getAllRoutines,
} from "../api/auth";

const EditRoutineActivity = ({
  routine,
  routineActivity,
  routines,
  setRoutines,
  activity,
  setRoutine,
}) => {
  const [count, setCount] = useState("");
  const [duration, setDuration] = useState("");
  const [activities, setActivities] = useState([]);
  const routineActivityId = activity.routineActivityId;
  const routineId = routine.id;
  // const navigate = useNavigate();

  return (
    <div>
      <form
        onSubmit={async (event) => {
          try {
            event.preventDefault();
            const updatedRoutineActivity = await updateRoutineActivity(
              routineActivityId,
              count,
              duration
            );
            const routines = await getAllRoutines();
            const routineToFilter = routines?.filter((routine) => {
              return updatedRoutineActivity.routineId === routine.id;
            });
            console.log(routineToFilter);
            setRoutine(routineToFilter[0]);
          } catch (error) {
            console.error(error);
          }
        }}
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
