import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { attachActivityToRoutine, getAllRoutines } from "../api/auth";

const AddActivities = ({ routine, setRoutine, routines, activities }) => {
  const routineId = routine.id;
  const [activityId, setActivityId] = useState("");
  const [count, setCount] = useState("");
  const [duration, setDuration] = useState("");
  const navigate = useNavigate();

  let activitiesToMap = activities?.map((a, index) => {
    return (
      <option value={a.id} key={index}>
        {a.name}
      </option>
    );
  });

  return (
    <div>
      <form
        onSubmit={async (event) => {
          try {
            event.preventDefault();
            console.log(activityId);
            const addActivities = await attachActivityToRoutine({
              routineId,
              activityId,
              count,
              duration,
            });
            const routineToFilter = routines?.filter((routine) => {
              return addActivities.routineId === routine.id;
            });
            setRoutine(routineToFilter[0]);
            navigate('/my_routines');
          } catch (error) {
            console.error(error);
          }
        }}
      >
        <label>Choose an Activity: </label>
        <select
          onChange={(event) => setActivityId(parseInt(event.target.value))}
        >
          {activitiesToMap}
        </select>
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
        <button type="submit">Add Activity to {routine.name}</button>
      </form>
    </div>
  );
};

export default AddActivities;
