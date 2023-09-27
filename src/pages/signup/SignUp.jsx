import React  from "react";
import "./SignUp.css";
import logo from '../../asset/logo.jpg';
import {TextField, Button, Checkbox} from '@mui/material';

const SignUp = () => {
    return(
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
                  <TextField id="outlined-basic" label="FirstName" variant="outlined"/>
                  <TextField id="outlined-basic" label="LastName" variant="outlined"/>
                  </div>
                  <div className="userName">
                     <TextField id="outlined-basic" label="UserName" variant="outlined" className="userNameBox" />             
                  </div>
                  <div className="UserNameLabel">
                  <label >You can use letters, numbers & periods</label> 
                  </div>   
                  <p>Use My Current Email instead</p>

                  <div className="password">
                     <TextField
                       id="outlined-password-input"
                       label="Password"
                       type="password"
                       autoComplete="current-password"
                     />
                     <TextField
                       id="outlined-password-input"
                       label="Confirm Password"
                       type="password"
                       autoComplete="current-password"
                     />
                  </div>

                  <p>Use 8 or more characters with a mix of letters, numbers & symbols</p>

                  <div className="showPassword">
                  <input type="checkbox" id="showPassword"/>
                  <label for="showPassword">Show Password</label>
                  </div>

                  <div className="lastDiv">
                     <a href="">Sign in insted</a>
                     <Button variant="contained" className="nextButton">Next</Button>
                  </div>
                  </form>

               </div>
            </div>
            <div className="image-Container">
               <img src={logo} className="image"></img>
            </div>
          </div>
       </div>
    )
}
export default SignUp