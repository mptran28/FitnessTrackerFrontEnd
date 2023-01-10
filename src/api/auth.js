const baseUrl = "http://fitnesstrac-kr.herokuapp.com/api";

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
    // console.log(response);
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
    console.log("THIS IS DATA", data);
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

export const createNewRoutine = async (token, isPublic, name, goal) => {
  try {
    const response = await (`${baseUrl}/routines`,
    {
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

export const createNewActivity = async (token, name, description) => {
  try {
    const response = await fetch(`${baseUrl}/routines`, {
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
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

// export const getRoutines = async (setUser) => {
//   try {
//     const response = await fetch(`${baseUrl}/routines`);
//     console.log("GETROUTINE RESPONSE", response)
//     const data = await response.json();
//     setUser(data.routines)
//   } catch (error) {

//   }
// }

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

export const getAllActivities = async () => {
  try {
    const response = await fetch(`${baseUrl}/activities`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
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

*/

/*
============= NOT DONE ==============

GET /api/users/:username/routines
PATCH /api/activities/:activityId (*)
GET /api/activities/:activityId/routines
PATCH /api/routines/:routineId (**)
DELETE /api/routines/:routineId (**)
POST /api/routines/:routineId/activities
PATCH /api/routine_activities/:routineActivityId (**)
DELETE /api/routine_activities/:routineActivityId (**)

*/
