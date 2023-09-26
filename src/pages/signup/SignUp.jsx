import React  from "react";
import "./SignUp.css";
import logo from '../../asset/logo.jpg';

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
                     <input placeholder="FirstName" className="namebox"></input>
                     <input placeholder="LastName" className="namebox"></input>
                  </div>
                  <div className="userName">
                     <input placeholder="UserName" className="userNameBox"></input>               
                  </div>
                  <div className="UserNameLabel">
                  <label >You can use letters, numbers & periods</label> 
                  </div>   
                  <p>Use My Current Email instead</p>

                  <div className="password">
                     <input placeholder="Password" className="namebox"></input>
                     <input placeholder="Confirm" className="namebox"></input>
                  </div>

                  <p>Use 8 or more characters with a mix of letters, numbers & symbols</p>

                  <div className="showPassword">
                  <input type="checkbox" id="showPassword"/>
                  <label for="showPassword">Show Password</label>
                  </div>

                  <div className="lastDiv">
                     <a href="">Sign in insted</a>
                     <button className="nextButton">Next</button>
                  </div>
                  </form>

               </div>
            </div>
            <div className="image">
               {/* <img src="https://ssl.gstatic.com/accounts/signup/glif/account.svg" alt=""></img> */}
               <img src={logo} width={350} height={250}></img>
            </div>
          </div>
       </div>
    )
}
export default SignUp