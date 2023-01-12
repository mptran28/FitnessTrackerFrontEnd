import React, { useState, useEffect } from "react";
import { deleteRoutine, updateRoutine } from "../api/auth";
import { useParams, useNavigate } from "react-router-dom";
import EditRoutine from "./EditRoutine";

const SingleRoutine = ({ routines }) => {
  const [show, setShow] = useState(false);
  const [editRoutine, setEditRoutine] = useState(false);
  const { id } = useParams();
  const [routine, setRoutine] = useState({});
  const navigate = useNavigate();
  const token = localStorage.token;

  useEffect(() => {
    let routine = {};
    for (let r of routines) {
      if (r.id == id) {
        routine = r;
      }
    }
    setRoutine(routine);
  }, [id]);

  return routine && routine.id ? (
    <>
      <h1>Routine</h1>
      <div className="routines" key={routine.id}>
        <h2>{routine.name}</h2>
        <h2>{routine.goal}</h2>
        {/* {show ? (
          <Messages token={token} post={post} show={show} setShow={setShow} />
        ) : (
          <button
            onClick={() => {
              setShow(!show);
            }}
          >
            Message
          </button>
        )} */}
        {editRoutine ? (
          <EditRoutine
            token={token}
            routine={routine}
            show={show}
            setShow={setShow}
          />
        ) : (
          <button
            onClick={() => {
              setEditRoutine(!editRoutine);
            }}
          >
            Update Routine
          </button>
        )}
      </div>
    </>
  ) : (
    <h2>Sorry No Post</h2>
  );
};
export default SingleRoutine;
