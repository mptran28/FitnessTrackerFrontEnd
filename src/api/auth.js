const baseUrl = "http://fitnesstrac-kr.herokuapp.com/api";

export const registerUser = async (username, password) => {
    try {
        const response = await fetch (`${baseUrl}/users/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user: {
                    username,
                    password,
                },
            }),
        });
        const token = (await response.json()).data.token;
        return token;
    } catch (error) {
        console.error(error);
    }
}

export const fetchMe = async (token) => {
    try {
        const response = await fetch(
            `${baseUrl}/users/me`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
        const { data } = await response.json();
        return data;   
    } catch (error) {
        console.error(error)
    }
}

export const createNewRoutine = async (
    token,
    id,
    creatorId,
    isPublic,
    name,
    goal
) => {
    const response = await (`${baseUrl}/routines`, {
        method: "POST",
        headers: {
            "Content-Type":"application/json",
            Authorization:`Bearer ${token}`,
        }
    })
}