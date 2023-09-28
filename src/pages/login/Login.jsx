import React  from "react";
import { useState } from "react";
import "./Login.css";
import { TextField, Button } from "@mui/material";


export default function login(){

   
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
                    {/* <input placeholder="Emial or Phone*" className="input"></input> */}
                    <TextField id="outlined-basic" label="Email or Phone*" variant="outlined" /> 
                    {/* <input placeholder="Password*" className="input"></input> */}
                    <TextField id="outlined-basic" label="Password*" variant="outlined" /> 
                    </div>
                    <p className="forgot">
                    <a href="">forgot Password?</a>
                    </p>
                    <div className="logindiv">
                        <a href="">Create Account</a>
                        <Button variant="contained">Login</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}