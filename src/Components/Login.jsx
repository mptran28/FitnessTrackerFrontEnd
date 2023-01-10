import React, { useState } from "react";
import { userLogin } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ token, setToken}) => {
    const [usernameLogin, setUsernameLogin] = useState("");
    const [passwordLogin, setPasswordLogin] = useState("");
    const navigate = useNavigate();

    return (
        <>
            <div className="login">
                <h3 className="title">Login</h3>
                <form className="login" onSubmit={async (e) => {
                    try {
                        e.preventDefault();
                        const data = await userLogin(usernameLogin, passwordLogin);
                        const token = data.token;
                        setToken(token);
                        localStorage.setItem("token", token);
                        { token ? (navigate('/')) : console.log("No Token!!") };
                    } catch (error) {
                        console.error(error);
                    }
                    location.reload()
                }}>
                    <input value={usernameLogin} type="text" placeholder="username" minLength={3} onChange={(e) => setUsernameLogin(e.target.value)}></input> 
                    <input value={passwordLogin} type="password" placeholder="password" minLength={3} onChange={(e) => setPasswordLogin(e.target.value)}></input>
                    <button type="submit">Login</button>
                    <Link to="/register"> Don't have an account? Register Here </Link>
                </form>
            </div>
        </>
    );
}


export default Login;
