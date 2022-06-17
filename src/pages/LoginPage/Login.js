import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Login.css";
import { useAuth } from "../../Context/authContext";
import axios from "axios";

const Login = () => {
  const [userDetails, setUserDetails] = useState({ email: "", password: "" });
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const onChangehandler = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/login", {
        email: userDetails.email,
        password: userDetails.password,
      });
      localStorage.setItem("token", response.data.encodedToken);
      setAuth(true);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const GuestloginHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("api/auth/login", {
        email: "vaishnavipaliya@gmail.com",
        password: "vaishnavi",
      });
      localStorage.setItem("token", data.encodedToken);
      setAuth(true);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="login-container">
        <div className="login-card">
          <h1>Log-in</h1>
          <form>
            <input
              name="email"
              type="text"
              className="form-input"
              placeholder="Enter your Email"
              onChange={(e) => onChangehandler(e)}
            />
            <input
              name="password"
              type="text"
              className="form-input"
              placeholder="Enter your Password"
              onChange={(e) => onChangehandler(e)}
            />

            <button onClick={(e) => loginHandler(e)}>Login</button>
            <button onClick={(e) => GuestloginHandler(e)}>GuestLogin</button>
            <p>not a member yet?</p>
            <Link className="signup" to="/sign">
              sign-up now
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export { Login };
