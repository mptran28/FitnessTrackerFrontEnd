import { useState, useEffect } from "react";
import { getAllActivities, getAllRoutines, fetchMe } from "./api/auth";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import NavBar from "./Components/Navbar";
import Register from "./Components/Register";
import Routines from "./Components/Routines";
import Activities from "./Components/Activities";
import My_Routines from "./Components/My_Routines";
import "./App.css";

function App() {
  const [activities, setActivities] = useState([]);
  const [routines, setRoutines] = useState([]);
  const [user, setUser] = useState({});
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    const getMe = async () => {
      const data = await fetchMe(token);
      setUser(data);
    };
    if (token) {
      getMe();
    }
  }, [token]);

  // useEffect(() => {
  //   getRoutines(setUser);
  // }, [updated]);

  useEffect(() => {
    const getActivities = async () => {
      const response = await getAllActivities();
      console.log("activities", response);
      setActivities(response);
    };
    getActivities();
  }, [token]);

  useEffect(() => {
    const getRoutines = async () => {
      const response = await getAllRoutines();
      console.log("routines", response);
      setRoutines(response);
    };
    getRoutines();
  }, [token]);

  return (
    <>
      <NavBar token={token} setToken={setToken} />
      <div className="App">
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route
            path="/activities"
            element={
              <Activities
                activities={activities}
                setActivities={setActivities}
              />
            }
          />
          <Route
            path="/routines"
            element={<Routines routines={routines} setRoutines={setRoutines} />}
          />
          <Route path="/my_routines" element={<My_Routines token={token} />} />
          <Route
            path="/register"
            element={<Register token={token} setToken={setToken} />}
          />
          <Route
            path="/login"
            element={<Login token={token} setToken={setToken} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
