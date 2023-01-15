import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { deleteRoutineActivity, getAllRoutines } from "../api/auth";
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

  console.log(routine);

  const handleDelete = async (routineActivityId) => {
    const response = await deleteRoutineActivity(routineActivityId);
    if (response) {
      const routines = await getAllRoutines();
      console.log("this is response", response);
      const routineToFilter = routines?.filter((routine) => {
        return response.routineId === routine.id;
      });
      setRoutine(routineToFilter);
    }
  };

  return routine && routine.id ? (
    <>
      <h1>Routine</h1>
      <div className="routines" key={routine.id}>
        <h2>{routine.name}</h2>
        <h2>{routine.goal}</h2>
        <h3>Activities :</h3>
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
                    <EditRoutineActivity
                      routine={routine}
                      routines={routines}
                      setRoutines={setRoutines}
                      setRoutine={setRoutine}
                      activity={activity}
                      activities={activities}
                      setActivities={setActivities}
                    />
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
                    onClick={() => handleDelete(activity.routineActivityId)}
                  >
                    Delete Activity
                  </button>
                </div>
              );
            })
          : null}
        {addActivity ? (
          <AddActivities
            routine={routine}
            routines={routines}
            setRoutines={setRoutines}
            setRoutine={setRoutine}
            activities={activities}
          />
        ) : (
          <button
            onClick={() => {
              setAddActivity(!addActivity);
            }}
          >
            Add Activity
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
