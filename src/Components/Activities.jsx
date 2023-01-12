import React, { useEffect, useState } from "react";
import "./Activities.css";
import NewActivity from "./NewActivity";

const Activities = ({ activities, setActivities }) => {
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
      <NewActivity activities={activities} setActivities={setActivities}/>
      <h1>Activities</h1>
      <div>{activitiesToMap}</div>
    </>
  );
};

export default Activities;
