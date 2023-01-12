import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import { createNewActivity } from "../api/auth";

const NewActivity = ({activities, setActivities}) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();
    
    return (
        <div>
          <form
            onSubmit={async (event) => {
                try {
                    event.preventDefault();
                    const newActivity = await createNewActivity(name, description);
                    setActivities([newActivity, ...activities]);
                    navigate("/activities");
                } catch (error) {
                    console.error(error)
                }
            }}
          >
            <h1>Create New Activity</h1>
            <label htmlFor="title">Name</label>
            <input
              value={name}
              type="text"
              required
              placeholder="name"
              onChange={(event)=> setName(event.target.value)}
            ></input>
            <label htmlFor="description">Description</label>
            <input
              value={description}
              type="text"
              required
              placeholder="description"
              onChange={(event) => setDescription(event.target.value)}
            ></input>
            <button type="submit">Create Activity</button>
          </form>
        </div>
    );
};

export default NewActivity;