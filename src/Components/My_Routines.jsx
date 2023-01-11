import React, {useState} from "react";
import { deleteRoutine } from "../api/auth";
import NewRoutine from "./NewRoutine";
import EditRoutine from "./EditRoutine";

const My_Routines = ({ token, user, routines, setRoutines }) => {
  const [show, setShow] = useState(false);
  const [editRoutine, setEditRoutine] = useState(false);


  const handleDelete = async (routineId) => {
    const response = await deleteRoutine(routineId)
    if (response) {
      const newRoutines = routines.filter(routine => routine.id !== routineId);
      setRoutines(newRoutines);
    }
  }
  let routinesToMap = routines.map((routine, index) => {
    console.log("routinestomap", routine)
    if (user.id === routine.creatorId) {
      return (
        <div className="routines" key={index}>
          <h2>{routine.name}</h2>
          <h2>{routine.goal}</h2>
          editRoutine ? (
          <EditRoutine routine={routine} show={show} setShow={setShow} />
        ) : (
          <button
            onClick={() => {
              setEditRoutine(!editRoutine);
            }}
          >
            Edit Post
          </button>)
          <button type="submit" className="delete-button" onClick={(() => handleDelete(routine.id))}>Delete</button>
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
