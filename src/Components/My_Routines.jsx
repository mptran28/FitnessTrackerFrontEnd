import React, { useState, useEffect } from "react";
import { getAllRoutines, fetchMe } from "../api/auth";
import NewRoutine from "./NewRoutine";

const My_Routines = ({ token }) => {
  const [routines, setRoutines] = useState([]);

  useEffect(() => {
    const getAllRoutines = async () => {
      const response = await fetchMe(token);
      console.log("THIS IS RESPONSE", response);
      setRoutines(response);
    };
    if (token) getAllRoutines();
  }, [token]);

  //   console.log(routines);

  let routinesToMap = routines.map((routine, index) => {
    return (
      <div className="routines" key={index}>
        <h2>{routine.name}</h2>
        <h2>{routine.goal}</h2>
      </div>
    );
  });

  return (
    <>
      <NewRoutine />
      <h2>Routines</h2>
      <div>{routinesToMap}</div>
    </>
  );
};

export default My_Routines;
