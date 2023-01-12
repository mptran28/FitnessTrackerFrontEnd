import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { attachActivityToRoutine } from "../api/auth";

const AddActivities = ({routine, activities, setActivities}) => {
    const routineId = routine.id;
    // const activityId = ;
    // const count = ;
    // const duration = ;
    const [activity, setActivity] = useState({});
    // const [count, setCount] = useState("");
    // const [duration, setDuration] = useState("");
    const navigate = useNavigate;
    return (
        <div>
            <form
                onSubmit={async (event) => {
                    try {
                        event.preventDefault();
                        const addActivities = await attachActivityToRoutine(
                            routineId, 
                            activityId, 
                            count, 
                            duration
                        );
                        return addActivities
                    } catch (error) {
                        console.error(error);
                    }
                }}
            >
                <label>Choose an Activity: </label>
                <select>
                    <option>cat</option>
                    <option>dog</option>
                </select>
                <button type="submit">Add Activities</button>
            </form>
        </div>
    )
}

export default AddActivities;