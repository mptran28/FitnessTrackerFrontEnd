import React from "react";
import { deleteRoutine } from "../api/auth";
import { useNavigate } from "react-router-dom";
import NewRoutine from "./NewRoutine";

const My_Routines = ({ user, routines, setRoutines }) => {
  const navigate = useNavigate();

  const handleDelete = async (routineId) => {
    const response = await deleteRoutine(routineId);
    if (response) {
      const newRoutines = routines.filter(
        (routine) => routine.id !== routineId
      );
      setRoutines(newRoutines);
    }
  };
  let routinesToMap = routines.map((routine, index) => {
    if (user.id === routine.creatorId) {
      console.log(routine);
      return (
        <div className="routines" key={index}>
          <h2>{routine.name}</h2>
          <h2>{routine.goal}</h2>
          <button
            type="submit"
            className="delete-button"
            onClick={() => handleDelete(routine.id)}
          >
            Delete
          </button>
          <button
            onClick={() => {
              navigate(`/routines/${routine.id}`);
            }}
          >
            See Routine!
          </button>
        </div>
      );
    }
  });
  return (
    <>
      <NewRoutine routines={routines} setRoutines={setRoutines} />
      <h2>Routines</h2>
      <div>{routinesToMap}</div>
    </>
  );
};

export default My_Routines;
