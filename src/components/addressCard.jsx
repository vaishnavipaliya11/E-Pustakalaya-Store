import React, { useState } from "react";
import { useAddress } from "../Context/addressContext";
import { AddressModal } from "./address/addressModal";
export const AddressCard = () => {
  const { addressState, addressDispatch } = useAddress();
  const { useraddress, addressmodal } = addressState;
  const [selectedAdd, setSelectedAdd] = useState();
  const [editModal,setEditModal]= useState(false)
  return (
    <div>
      <div className="address-container">
        <div className="address-card">
          {useraddress?.map((address) => (
            <label key={address?._id} className="address-radio">
              <div className="edit-btn">
                <button
                  onClick={() => {
                    setEditModal(true)
                    addressDispatch({
                      type: "ADDRESS_ID",
                      payload: address?._id,
                    });
                  }}
                >
                  edit
                </button>
                {editModal ? <AddressModal address={address} updating={true} /> : ""}
              </div>
              <input
                type="radio"
                name="address"
                checked={selectedAdd?._id === address?._id}
                onChange={() => setSelectedAdd(address)}
              />
              <div>
                <h3>{address?.name}</h3>
                <address className="address-card-text">
                  <span>{address?.street},</span>
                  <span>{address?.state},</span>
                  <span>{address?.country},</span>
                  <span>{address?.zipCode},</span>
                  <span>{address?.mobile},</span>
                </address>
              </div>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};
