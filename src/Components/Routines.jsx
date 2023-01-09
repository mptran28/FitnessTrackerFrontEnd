import React, { useState, useEffect } from "react";
import "./Routines.css";

const Routines = ({ routines }) => {
  //   console.log(routines);
  let routinesToMap = routines.map((routine, index) => {
    return (
      <div className="routines" key={index}>
        <h2>{routine.name}</h2>
        <h3>Goal : {routine.goal}</h3>
      </div>
    );
  });
  return (
    <>
      <h1>Routines</h1>
      <div>{routinesToMap}</div>
    </>
  );
};

export default Routines;
