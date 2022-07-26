import React, { useEffect } from "react";
import { useAuth } from "../../Context/authContext";
import "./UserProfile.css";
import { useNavigate } from "react-router-dom";
import UserSideBar from "../../components/user-side-bar/UserSideBar";
import { useAddress } from "../../Context/addressContext";
import { getAllAddress } from "../../Utility/getAllAddress";

export const UserProfile = () => {
  const { authUser, setAuth } = useAuth();
  console.log(authUser);
  const { addressState, addressDispatch } = useAddress();
  const { useraddress } = addressState;
  const navigate = useNavigate();
  var retrievedPerson = JSON.parse(localStorage.getItem("currentUser"));

  const logOutHandler = () => {
    setAuth(localStorage.removeItem("token"));
    navigate("/login");
  };

  useEffect(() => {
    getAllAddress(addressDispatch);
  }, []);
  return (
    <div className="profile-container">
      <button className="add-to-cart" onClick={() => logOutHandler()}>
        logout
      </button>
      <div className="user-details">
        <p>
          Name:{retrievedPerson?.firstName} {retrievedPerson?.lastName}
        </p>
        <p>Email:{retrievedPerson?.email}</p>

        <button className="add-to-cart" onClick={() => navigate("/orders")}>
          My Orders
        </button>
        <div className="address-display">
          {useraddress?.map((content) => {
            return (
              <div>
                <h5>Address</h5>
                <p>{content?.street}</p>
                <p>{content?.zipCode}</p>
                <p>{content?.state}</p>
                <p>{content?.country}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
