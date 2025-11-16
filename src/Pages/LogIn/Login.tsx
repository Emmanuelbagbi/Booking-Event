import React from "react";
import "./login.css";
import { NavLink } from "react-router-dom";

const Login: React.FC = () => {

  return (
    <div className="signup-container">
     <div className="signup-overlayyy">
      <div className="login-card">
      
        <div className="signup-form student">
          <h2>Log in</h2>
          <form>
            <input type="email" placeholder="Email Address" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Sign in</button>
          </form>
          <p className="switch-text">
            Don't have an Account? {" "}
            <NavLink to="/Signup">Signup</NavLink>
          </p>
        </div>

       
      </div>
    </div>
      </div>
  );
};

export default Login;
