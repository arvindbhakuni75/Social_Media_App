import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";

const Auth = () => {
  return (
    <div className="auth">
      <div className="a-left">
        <img src={Logo} alt="logo" />
        <div className="app-name">
          <h1>Go Social</h1>
          <h6>Explore the world community!</h6>
        </div>
      </div>

      <Login />
    </div>
  );
};

function Login () {
    return (
        <>
      <div className="a-right">
        <form className="infoForm authForm" style={{maxWidth: "350px"}}>
          <h3>Log In</h3>

          <div>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              className="infoInput"
            />
          </div>

          <div>
            <input
              type="text"
              className="infoInput"
              placeholder="Username"
              name="username"
            />
          </div>

            <div>
                <span style={{fontSize: "12px"}}>Don't have an account Sign up</span>
            <button className="button info-button" type="submit">Signup</button>
            </div>


        </form>
      </div>
    </>
    )
}

function SignUp() {
  return (
    <>
      <div className="a-right">
        <form className="infoForm authForm">
          <h3>Sign up</h3>

          <div>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              className="infoInput"
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              className="infoInput"
            />
          </div>

          <div>
            <input
              type="text"
              className="infoInput"
              placeholder="Username"
              name="username"
            />
          </div>

          <div>
            <input
              type="text"
              className="infoInput"
              placeholder="Password"
              name="password"
            />
            <input
              type="text"
              className="infoInput"
              placeholder="Confirm Password"
              name="confirmpassword"
            />
          </div>

            <div>
                <span style={{fontSize: "12px"}}>Already have an account? Login!</span>
            </div>

            <button className="button info-button" type="submit">Signup</button>

        </form>
      </div>
    </>
  );
}

export default Auth;
