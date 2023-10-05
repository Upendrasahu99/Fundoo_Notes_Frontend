import React from "react";
import "./SignUp.css";
import logo from "../../asset/logo.jpg";
import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { Link , useNavigate } from "react-router-dom";
// import { fireEvent } from "@testing-library/react";
import { signup } from "../../service/UserService";

const regex = {
  firstName: /[A-Z]{1}[a-z]{2,}$/,
  lastName: /[A-Z]{1}[a-z]{2,}$/,
  email: /^[\w-.]+@gmail\.com$/,
  password:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
};

export default function SignUp() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
    // confirmPassword: "",
  });

  const [isValidFname, setIsValidFname] = useState({
    errorStatus: false,
    message: "",
  });
  const [isValidLname, setIsValidLname] = useState({
    errorStatus: false,
    message: "",
  });
  const [isValidUsername, setIsValidUsername] = useState({
    errorStatus: false,
    message: "",
  });
  const [isValidPassword, setIsValidPassword] = useState({
    errorStatus: false,
    message: "",
  });
  // const [isValidConfirmPassword, setIsValidConfirmPassword] = useState({
  //   errorStatus: false,
  //   message: "",
  // });

  const changeHandler = { //Save the data
    fname: (e) => setUser((prev) => ({ ...prev, firstName: e.target.value })), 
    lname: (e) => setUser((prev) => ({ ...prev, lastName: e.target.value })),
    userName: (e) => setUser((prev) => ({ ...prev, email: e.target.value })),
    password: (e) => setUser((prev) => ({ ...prev, password: e.target.value })),
    // confirmPassword: (e) =>setUser((prev) => ({ ...prev, confirmPassword: e.target.value })),
  };
  console.log(user)

  const submitHandler = () => { //Check Regex and 
    const fnameCheck = regex.firstName.test(user.firstName);
    const lnameCheck = regex.lastName.test(user.lastName);
    const userNameCheck = regex.email.test(user.email);
    const passwordCheck = regex.password.test(user.password);

    if (
      fnameCheck === false &&
      lnameCheck === false &&
      userNameCheck === false &&
      passwordCheck === false
    ) {
      setIsValidFname((prev) => ({
        ...prev,
        errorStatus: true,
        message: "Enter Valid First Name",
      }));
      setIsValidLname((prev) => ({
        ...prev,
        errorStatus: true,
        message: "Enter Valid Last Name",
      }));
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
    if (fnameCheck === false) {
      setIsValidFname((prev) => ({
        ...prev,
        errorStatus: true,
        message: "Enter Valid First Name",
      }));
    }
    if (lnameCheck === false) {
      setIsValidLname((prev) => ({
        ...prev,
        errorStatus: true,
        message: "Enter Valid Last Name",
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
    
    if (
      fnameCheck === true &&
      lnameCheck === true &&
      userNameCheck === true &&
      passwordCheck === true 
      // user.password === user.confirmPassword
    ) {

      signup(user).then ((response) =>{
        console.log(response)
      }).catch((error) => {
        console.log(error)
      })
      navigateToLogin();
      
    }
  };
  let navigate = useNavigate();
  
  const navigateToLogin = () =>{
    navigate("/");
  } 


  return (
    <div className="signup-Component">
      <div className="signup-Container">
        <div className="formArea">
          <div className="logo">
            <p className="f">F</p>
            <p className="u">u</p>
            <p className="n">n</p>
            <p className="d">d</p>
            <p className="o">o</p>
            <p className="o2">o</p>
          </div>
          <div className="form">
            <form>
              <div className="heading">
                <h4>Create Your Google Account</h4>
              </div>
              <div className="name">
                <TextField
                  id="outlined-basic"
                  name="firstName"
                  label="FirstName"
                  variant="outlined"
                  onChange={changeHandler.fname}
                  error={isValidFname.errorStatus}
                  helperText={isValidFname.message}
                />
                <TextField
                  id="outlined-basic"
                  name="lastName"
                  label="LastName"
                  variant="outlined"
                  onChange={changeHandler.lname}
                  error={isValidLname.errorStatus}
                  helperText={isValidLname.message}
                   />
              </div>
              <div className="userName">
                <TextField
                  id="outlined-basic"
                  name="userName"
                  label="UserName"
                  variant="outlined"
                  className="userNameBox"
                  onChange={changeHandler.userName}
                  error={isValidUsername.errorStatus}
                  helperText={isValidUsername.message}
                  />
              </div>
              <div className="UserNameLabel">
                <label>You can use letters, numbers & periods</label>
              </div>
              <p>Use My Current Email instead</p>

              <div className="password">
                <TextField
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  onChange={changeHandler.password}
                  error={isValidPassword.errorStatus}
                  helperText={isValidPassword.message}
                />
                <TextField
                  id="outlined-password-input"
                  label="Confirm Password"
                  type="password"
                  autoComplete="current-password"
                  // onChange={changeHandler.confirmPassword}
                  // error={isValidConfirmPassword.errorStatus}
                  // helperText={isValidConfirmPassword.message}
                />
              </div>

              <p>
                Use 8 or more characters with a mix of letters, numbers &
                symbols
              </p>

              <div className="showPassword">
                <input type="checkbox" id="showPassword" />
                <label for="showPassword">Show Password</label>
              </div>

              <div className="lastDiv">
              <Link to = "/"> 
                <a href="">Sign in insted</a>
                </Link>
                <Button variant="contained" className="nextButton" onClick={submitHandler}>Next</Button>
              </div>
            </form>
          </div>
        </div>
        <div className="image-Container">
          <img src={logo} className="image"></img>
        </div>
      </div>
    </div>
  );
}
