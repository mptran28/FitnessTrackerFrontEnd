import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import EditRoutine from "./EditRoutine";
import AddActivities from "./AddActivities";

const SingleRoutine = ({ routines, setRoutines }) => {
  const [editRoutine, setEditRoutine] = useState(false);
  const [addActivity, setAddActivity] = useState(false);
  const { id } = useParams();
  const [routine, setRoutine] = useState({});
  const navigate = useNavigate();
  const token = localStorage.token;

  useEffect(() => {
    let routine = {};
    for (let r of routines) {
      if (r.id == id) {
        routine = r;
      }
    }
    setRoutine(routine);
  }, [id]);

  return routine && routine.id ? (
    <>
      <h1>Routine</h1>
      <div className="routines" key={routine.id}>
        <h2>{routine.name}</h2>
        <h2>{routine.goal}</h2>
        {addActivity ? (
          <AddActivities routine={routine} />
        ) : (
          <button
            onClick={() => {
              setAddActivity(!addActivity);
            }}
          >
            Activities
          </button>
        )}
        {editRoutine ? (
          <EditRoutine token={token} routine={routine} routines={routines} setRoutines={setRoutines}  />
        ) : (
          <button
            onClick={() => {
              setEditRoutine(!editRoutine);
            }}
          >
            Update Routine
          </button>
        )}
      </div>
    </>
  ) : (
    <h2>Sorry No Post</h2>
  );
};
export default SingleRoutine;
