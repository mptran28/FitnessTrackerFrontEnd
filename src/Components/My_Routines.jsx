import React from "react";
import NewRoutine from "./NewRoutine";

const My_Routines = ({ token, user, routines, setRoutines }) => {
  console.log(user);

  let routinesToMap = routines.map((routine, index) => {
    if (user.id === routine.creatorId) {
      return (
        <div className="routines" key={index}>
          <h2>{routine.name}</h2>
          <h2>{routine.goal}</h2>
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
