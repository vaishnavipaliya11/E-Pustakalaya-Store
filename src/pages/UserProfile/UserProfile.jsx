import React from "react";
import { useAuth } from "../../Context/authContext";
import "./UserProfile.css";

export const UserProfile = () => {
  const { authUser, auth } = useAuth();
  console.log(authUser);
  var retrievedPerson = JSON.parse(localStorage.getItem("currentUser"));
  console.log(retrievedPerson);
  return (
    <div className="profile-container">
      <h3>UserProfile</h3>
      <p>
        Name:{retrievedPerson?.firstName} {retrievedPerson?.lastName}
      </p>
      <p>Email:{retrievedPerson?.email}</p>
      <p>Cart Items:{retrievedPerson?.cart?.length}</p>
      <p>Wishlist Items:{retrievedPerson?.wishlist?.length}</p>
      
      <p>Address{retrievedPerson?.address.map((content) => {
          return (
            <div>
             <p>{content?.street}</p>
              <p>{content?.zipcode}</p>
              <p>{content?.state}</p>
              <p>{content?.country}</p>
            </div>
          );
        })}
        </p>
    </div>
  );
};
