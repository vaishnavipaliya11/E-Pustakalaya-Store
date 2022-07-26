import React, { useState } from "react";
import { useAddress } from "../../Context/addressContext";
import { addNewAddress } from "../../Utility/addAddress";
import { updateAddress } from "../../Utility/editAddress";
import "./addModal.css";
const initialAddress = {
  name: "",
  mobile: "",
  zipCode: "",
  street: "",
  state: "",
  country: "",
};
export const AddressModal = ({
  address = initialAddress,
  updating,
  editModal,
  setEditModal,
}) => {
  const { addressState, addressDispatch } = useAddress();
  const [userInput, setUserInput] = useState(address);
  const [editing, setEditing] = useState(editModal);
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };

  const addDummyAddress = (e) => {
    e.preventDefault();
    setUserInput({
      name: "Johnny",
      street: "50  nd Floor Manewada Pardi Road , Nagpur,",
      zipCode: "405026",
      mobile: "7724687023",
      state: "Maharashtra",
      country: "India",
    });
  };

  const saveHandler = (e) => {
    e.preventDefault();
    if (updating) {
      updateAddress(userInput, addressDispatch);
      setEditModal(false)
    } else {
      addNewAddress(userInput, addressDispatch);
      addressDispatch({ type: "OPEN-MODAL", payload: false });
    }
    
  };

  return (
    <div className="address-modal-conatiner">
      <form>
        <div className="address-options">
          <label for="Name">Name</label> <br />
          <input
            label="Name"
            name="name"
            required
            placeholder="Enter your Name"
            defaultValue={userInput.name}
            onChange={(e) => changeHandler(e)}
          />
        </div>

        <div className="address-options">
          <label for="street">Street</label> <br />
          <input
            label="Street"
            name="street"
            required
            placeholder="Enter your street"
            defaultValue={userInput.street}
            onChange={(e) => changeHandler(e)}
          />
        </div>
        <div className="address-options">
          <label for="zipcode">Zipcode</label> <br />
          <input
            label="Zip-code"
            name="zipCode"
            required
            placeholder="Enter your zipcode"
            defaultValue={userInput.zipCode}
            onChange={(e) => changeHandler(e)}
          />
        </div>

        <div className="address-options">
          <label for="mobile" required>
            Mobile
          </label>{" "}
          <br />
          <input
            label="mobile"
            name="mobile"
            required
            placeholder="Enter your mobile no."
            defaultValue={userInput.mobile}
            onChange={(e) => changeHandler(e)}
          />
        </div>
        <div className="address-options">
          <label for="State">State</label> <br />
          <input
            label="State"
            name="State"
            required
            placeholder="Enter your state"
            defaultValue={userInput.state}
            onChange={(e) => changeHandler(e)}
          />
        </div>

        <div className="address-options">
          <label for="country">
            Country <br />
            <input
              label="Mobile"
              name="country"
              required
              placeholder="Enter your country"
              defaultValue={userInput.country}
              onChange={(e) => changeHandler(e)}
            />
          </label>
        </div>

        <div className="address-options modal-lower-btn">
          <button
            type="submit"
            onClick={(e) => saveHandler(e)}
            className="add-to-cart"
          >
            {updating ? "Update" : "Save"}
          </button>
    

          {updating ? (
            ""
          ) : (
            <button
              className="add-to-cart"
              onClick={(e) => {
                addDummyAddress(e);
              }}
            >
              Add dummy address
            </button>
          )}

          <button
            className="add-to-cart"
            onClick={() => {
              addressDispatch({ type: "OPEN-MODAL", payload: false });
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
