import { useState, useEffect } from "react";
import { getAllActivities, getAllRoutines, fetchMe } from "./api/auth";
import { Routes, Route, useAsyncError } from "react-router-dom";
import Activities from "./Components/Activities";
import Routines from "./Components/Routines";
import Register from "./Components/Register";
import NavBar from "./Components/Navbar";
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
    <div className="App">
      <NavBar />
      <Routes>
        <Route
          path="/activities"
          element={
            <Activities activities={activities} setActivities={setActivities} />
          }
        />
        <Route
          path="/routines"
          element={<Routines routines={routines} setRoutines={setRoutines} />}
        />
        <Route
          path="/register"
          element={
            <Register
              token={token}
              setToken={setToken}
              user={user}
              setUser={setUser}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
