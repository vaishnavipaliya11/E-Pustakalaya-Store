import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/authContext";
import "./Sign.css";
import { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();
  const { auth, setAuth } = useAuth();
  const [erorMsg, setErrorMsg] = useState(false);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    Email: "",
    Password: "",
  });

  const handelUserInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    setErrorMsg(false);
  };

  const signUpHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/auth/signup", {
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.Email,
        password: userData.Password,
      });

      localStorage.setItem("token", response.data.encodedToken);

      setAuth(true);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }

    if (
      !userData.firstName ||
      !userData.lastName ||
      !userData.Email ||
      !userData.Password
    ) {
      setErrorMsg(true);
      return;
    }
  };

  return (
    <div className="form-container">
      <div className="validation">
        <h2>Sign Up</h2>
        <form action="">
          <div>
            <input
              type="text"
              className="form-input"
              placeholder="Enter your First Name "
              name="firstName"
              onChange={handelUserInput}
              value={userData.firstName}
            />
          </div>

          <div>
            <input
              type="text"
              className="form-input"
              name="lastName"
              placeholder="Enter your Last Name"
              onChange={handelUserInput}
              value={userData.lastName}
            />
          </div>

          <div>
            <input
              type="email"
              className="form-input"
              name="Email"
              placeholder="Enter your email"
              onChange={handelUserInput}
              value={userData.Email}
            />
          </div>

          <div>
            <input
              type="text"
              className="form-input"
              placeholder="Enter your password"
              name="Password"
              onChange={handelUserInput}
              value={userData.Password}
            ></input>
          </div>

          <div style={{ color: "red" }}>
            <p>{erorMsg && "Enter the feilds"}</p>
          </div>

          <div>
            <p onClick={() => navigate("/login")}> Already have an account?</p>

            <button className="remove-card-btn" onClick={signUpHandler}>
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export { SignUp };
