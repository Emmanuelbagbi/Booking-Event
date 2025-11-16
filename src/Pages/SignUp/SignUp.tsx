import React, { useState } from "react";
import "./SignUp.css";
import { NavLink } from "react-router-dom";

const SignUp: React.FC = () => {
  const [isOrganizer, setIsOrganizer] = useState(false);

  return (
    <div className="signup-container">
     <div className="signup-overlayyy">
      <div className={`signup-card ${isOrganizer ? "flipped" : ""}`}>
      
        <div className="signup-form student">
          <h2>🎓 Sign Up</h2>
          <form>
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
            {/* <input type="text" placeholder="Username" required /> */}
            <input type="email" placeholder="Email Address" required />
            <input type="tel" placeholder="Phone Number" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Register</button>
          </form>
          <p className="switch-text">
            Are you an{" "}
            <span onClick={() => setIsOrganizer(true)}>Organizer?</span>
          </p>
           <p className="switch-text">
            Have an Account? {" "}
            <NavLink to="/Login">Login</NavLink>
          </p>
        </div>

        
        <div className="signup-form organizer">
          <h2>Sign Up as an Organizer</h2>
          <form>
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="tel" placeholder="Phone Number" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Register</button>
          </form>
          <p className="switch-text">
            Want to sign up as a {" "}
            <span onClick={() => setIsOrganizer(false)}>Participant?</span>
          </p>
            <p className="switch-text">
            Have an Account? {" "}
            <NavLink to="/Login">Login</NavLink>
          </p>
        </div>
      </div>
    </div>
      </div>
  );
};

export default SignUp;
