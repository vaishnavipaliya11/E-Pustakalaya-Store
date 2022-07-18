import React from "react";
import { useNavigate } from "react-router-dom";
import "../../pages/UserProfile/UserProfile.css";
const UserSideBar = () => {
  const navigate = useNavigate();
  return (
    <div className="profile-container">
      UserSideBar
      <div className="side-bar-container">
        <p onClick={() => navigate("./profile")}>UserProfile</p>
        <p onClick={() => navigate("/orders")}>Orders</p>
      </div>
    </div>
  );
};

export default UserSideBar;
