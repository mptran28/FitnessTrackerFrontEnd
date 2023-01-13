import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { deleteRoutineActivity } from "../api/auth";
import EditRoutine from "./EditRoutine";
import AddActivities from "./AddActivities";
import EditRoutineActivity from "./EditRoutineActivity";

const SingleRoutine = ({
  routines,
  setRoutines,
  activities,
  setActivities,
}) => {
  const [editRoutine, setEditRoutine] = useState(false);
  const [addActivity, setAddActivity] = useState(false);
  const [editRoutineActivity, setEditRoutineActivity] = useState(false);
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

  const handleDelete = async (routineActivityId) => {
    const response = await deleteRoutineActivity(routineActivityId);
    if (response) {
      const newActivities = activities.filter(
        (activity) => activity.id !== routineActivityId
      );
      setActivities(newActivities);
    }
  };

  return routine && routine.id ? (
    <>
      <h1>Routine</h1>
      <div className="routines" key={routine.id}>
        <h2>{routine.name}</h2>
        <h2>{routine.goal}</h2>
        Activities :
        {routine.activities
          ? routine.activities.map((activity, index) => {
              return (
                <div key={index}>
                  <h5>Name : {activity.name}</h5>
                  <h5>Description : {activity.description}</h5>
                  <h5>
                    Count/Duration : {activity.count}/{activity.duration}
                  </h5>
                  {editRoutineActivity ? (
                    <EditRoutineActivity routine={routine} />
                  ) : (
                    <button
                      onClick={() => {
                        setEditRoutineActivity(!editRoutineActivity);
                      }}
                    >
                      Edit Routine Activity
                    </button>
                  )}

                  <button
                    type="submit"
                    className="delete-button"
                    onClick={() => handleDelete(activity.id)}
                  >
                    Delete Activity
                  </button>
                </div>
              );
            })
          : null}
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
          <EditRoutine
            token={token}
            routine={routine}
            routines={routines}
            setRoutines={setRoutines}
          />
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
