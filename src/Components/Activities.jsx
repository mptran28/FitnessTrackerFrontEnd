import React, { useEffect, useState } from "react";
import "./Activities.css";

const Activities = ({ activities }) => {
  //   console.log(activities);
  let activitiesToMap = activities.map((activity, index) => {
    return (
      <div className="activities" key={index}>
        <h2>{activity.name}</h2>
        <h3>Description : {activity.description}</h3>
      </div>
    );
  });
  return (
    <>
      <h1>Activities</h1>
      <div>{activitiesToMap}</div>
    </>
  );
};

export default Activities;
