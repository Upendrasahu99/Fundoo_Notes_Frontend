import React from "react";
import "./Login.css";

const login = () => {
    return(
        <div className="login-Component">
            <div className="login-Container">
                <div className="form-Area">
                    <div className="logo">
                    <p className="f">F</p>
                    <p className="u">u</p>
                    <p className="n">n</p>
                    <p className="d">d</p>
                    <p className="o">o</p>
                    <p className="o2">o</p>
                    </div>
                    <p className="loginText">Login</p>
                    <p className="useGoogle">Use your Google Account</p>
                    <div className="inputArea">
                    <input placeholder="Emial or Phone*" className="input"></input>
                    <input placeholder="Password*" className="input"></input>
                    </div>
                    <p className="forgot">
                    <a href="">forgot Password?</a>
                    </p>
                    <div className="logindiv">
                        <a href="">Create Account</a>
                        <button className="loginButton">Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default login