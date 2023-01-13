import React from "react";
import "./Routines.css";
const Routines = ({ routines }) => {
  console.log(routines);
  return (
    <>
      <h1>Routines</h1>
      <div>
        {routines.length
          ? routines.map((routine, index) => {
              return (
                <div className="routines" key={index}>
                  <h2>Name : {routine.name}</h2>
                  <h3>Creator : {routine.creatorName}</h3>
                  <h3>Goal : {routine.goal}</h3>
                  <h3>Activities :
                    {routine.activities
                      ? routine.activities.map((activity, index) => {
                          return (
                            <div key={index}>
                              <h5>Name : {activity.name}</h5>
                              <h5>Description : {activity.description}</h5>
                              <h5>
                                Count/Duration : {activity.count}/
                                {activity.duration}
                              </h5>
                            </div>
                          );
                        })
                      : null}
                  </h3>
                </div>
              );
            })
          : null}
      </div>
    </>
  );
};
export default Routines;
