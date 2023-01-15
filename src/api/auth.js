const baseUrl = "http://fitnesstrac-kr.herokuapp.com/api";

// ======================  USERS ENDPOINT ====================

export const registerUser = async (username, password) => {
  try {
    const response = await fetch(`${baseUrl}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const token = (await response.json()).token;
    console.log("THIS IS TOKEN", token);
    return token;
  } catch (error) {
    console.error(error);
  }
};

export const fetchMe = async (token) => {
  try {
    const response = await fetch(`${baseUrl}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const userLogin = async (username, password) => {
  try {
    const response = await fetch(`${baseUrl}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const token = await response.json();
    return token;
  } catch (error) {
    console.error(error);
  }
};

// ======================  ACTIVITIES ENDPOINT ====================

export const getAllActivities = async () => {
  try {
    const response = await fetch(`${baseUrl}/activities`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const createNewActivity = async (name, description) => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${baseUrl}/activities`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name,
        description,
      }),
    });
    console.log("createActivities: ", name, description);
    const data = await response.json();
    console.log("dataCreateActivity", data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const updateActivity = async (name, description, activityId) => {
  try {
    const response = await fetch(`${baseUrl}/activities/${activityId}`, {
      method: "PATCH",
      body: JSON.stringify({
        name,
        description,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

// ======================  ROUTINES ENDPOINT ====================

export const getPublicRoutinesByActivity = async (activityId) => {
  try {
    const response = await fetch(
      `${baseUrl}/activities${activityId}/routines`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getRoutines = async (setRoutines) => {
  try {
    const response = await fetch(`${baseUrl}/routines`);
    console.log("GETROUTINE RESPONSE", response);
    const data = await response.json();
    setRoutines(data.routines);
    console.log("SET THE DATA", data);
  } catch (error) {
    console.error(error);
  }
};

export const getAllRoutines = async () => {
  try {
    const response = await fetch(`${baseUrl}/routines`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const createNewRoutine = async ({ isPublic, name, goal }) => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${baseUrl}/routines`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        isPublic,
        name,
        goal,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getUserRoutines = async (username) => {
  try {
    const response = await fetch(`${baseUrl}/users/${username}/routines`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const updateRoutine = async (routineId, name, goal, isPublic) => {
  console.log("this is name", name);
  console.log("this is goal", goal);
  console.log("this is isPublic", isPublic);
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(`${baseUrl}/routines/${routineId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name,
        goal,
        isPublic,
      }),
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteRoutine = async (routineId) => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${baseUrl}/routines/${routineId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const attachActivityToRoutine = async ({
  routineId,
  activityId,
  count,
  duration,
}) => {
  console.log("attachActivity", routineId, activityId, count, duration);
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(
      `${baseUrl}/routines/${routineId}/activities`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          activityId,
          count,
          duration,
        }),
      }
    );
    console.log(response.body);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

// ======================  ROUTINE_ACTIVITIES ENDPOINT ====================

export const updateRoutineActivity = async (
  routineActivityId,
  count,
  duration
) => {
  console.log(routineActivityId, count, duration);
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(
      `${baseUrl}/routine_activities/${routineActivityId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          count,
          duration,
        }),
      }
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteRoutineActivity = async (routineActivityId) => {
  console.log(routineActivityId);
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(
      `${baseUrl}/routine_activities/${routineActivityId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

/*
============ DONE ==============

POST /api/users/register -registerUser
POST /api/users/login - userLogin
GET /api/users/me - fetchMe
GET /api/activities - getAllActivities
POST /api/activities (*) - createNewActivity
GET /api/routines - getAllRoutines
POST /api/routines (*) - createNewRoutine
GET /api/users/:username/routines - getUserRoutines
PATCH /api/activities/:activityId (*) - updateActivity
GET /api/activities/:activityId/routines - getPublicRoutinesByActivity
PATCH /api/routines/:routineId (**) - updateRoutine
DELETE /api/routines/:routineId (**) - deleteRoutine
POST /api/routines/:routineId/activities - attachActivityToRoutine
PATCH /api/routine_activities/:routineActivityId (**) - updateRoutineActivity
DELETE /api/routine_activities/:routineActivityId (**) - deleteRoutineActivity

*/
