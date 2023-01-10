import React, { useState, useEffect } from "react";
import { createNewActivity } from "../api/auth";
import "./Routines.css";

const Routines = ({ routines }) => {
  console.log(routines);
  let routinesToMap = routines.map((routine, index) => {
    {
      var activitiesToMap = routine.activities.map((activity, index) => {
        return (
          <div key={index}>
            <h5>Name : {activity.name}</h5>
            <h5>Description : {activity.description}</h5>
            <h5>
              Count/Duration : {activity.count}/{activity.duration}
            </h5>
          </div>
        );
      });
    }
    return (
      <div className="routines" key={index}>
        <h2>Name : {routine.name}</h2>
        <h3>Creator : {routine.creatorName}</h3>
        <h3>Goal : {routine.goal}</h3>
        <h3>Activities : {activitiesToMap}</h3>
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
