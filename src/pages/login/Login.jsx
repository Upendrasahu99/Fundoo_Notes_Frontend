import React from "react";
import { useState } from "react";
import "./Login.css";
import { TextField, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../service/UserService";

const regex = {
  email: /^[\w-.]+@gmail\.com$/i,
  password:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
};

export default function Login() {
  

  const [data, setData] = useState({ email: "", password: "" });

  const [isValidUsername, setIsValidUsername] = useState({
    errorStatus: false,
    message: "",
  });
  const [isValidPassword, setIsValidPassword] = useState({
    errorStatus: false,
    message: "",
  });

  const changeHandler = {
    userName: (e) => setData((prev) => ({ ...prev, email: e.target.value })),
    password: (e) => setData((prev) => ({ ...prev, password: e.target.value })),
  };

  const submitHandler = () => {
    const userNameCheck = regex.email.test(data.email);
    const passwordCheck = regex.password.test(data.password);
    if (userNameCheck === false && passwordCheck === false) {
      setIsValidUsername((prev) => ({
        ...prev,
        errorStatus: true,
        message: "Enter Valid Email",
      }));
      setIsValidPassword((prev) => ({
        ...prev,
        errorStatus: true,
        message: "Enter Valid Password",
      }));
    }

    if (userNameCheck === false) {
      setIsValidUsername((prev) => ({
        ...prev,
        errorStatus: true,
        message: "Enter Valid Email",
      }));
    }
    if (passwordCheck === false) {
      setIsValidPassword((prev) => ({
        ...prev,
        errorStatus: true,
        message: "Enter Valid Password",
      }));
    }
    if (userNameCheck === true && passwordCheck === true) {
      // alert("user registered successfully");
      login(data)
        .then((response) => {
          console.log(response);
          localStorage.setItem("Token", response.data.result); // data is axios data which is comming and result is response 
          navigateToDashboard(); // "result" is name which we given in controller response
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  let navigate = useNavigate();
  
  const navigateToDashboard = () =>{
    navigate("/dashboard");
  } 
  return (
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
            <TextField
              id="outlined-basic"
              name="userName"
              label="Email or Phone*"
              variant="outlined"
              onChange={changeHandler.userName}
              error={isValidUsername.errorStatus}
              helperText={isValidUsername.message}
            />
            {/* <input placeholder="Password*" className="input"></input> */}
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              onChange={changeHandler.password}
              error={isValidPassword.errorStatus}
              helperText={isValidPassword.message}
            />
          </div>
          <p className="forgot">
            <a href="">forgot Password?</a>
          </p>
          <div className="logindiv">
            <Link to="/signup">
              <a href="">Create Account</a>
            </Link>

            <Button variant="contained" onClick={submitHandler}>
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
