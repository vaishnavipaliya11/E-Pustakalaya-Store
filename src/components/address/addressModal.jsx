import React, { useState } from "react";
import { useAddress } from "../../Context/addressContext";
import { addNewAddress } from "../../Utility/addAddress";
import "./addModal.css";
export const AddressModal = () => {
  const initialAddress = {
    name: "",
    mobile: "",
    zipCode: "",
    street: "",
    state: "",
    country: "",
  };
  const { addressState, addressDispatch } = useAddress();
  const { useraddress, addressmodal } = addressState;
  const [userInput, setUserInput] = useState(initialAddress);
  console.log(useraddress);

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

  const saveHandler = e =>{
    e.preventDefault()
    console.log("called");
    
    addNewAddress(userInput,addressDispatch)
    addressDispatch({type:"OPEN-MODAL",payload:false})
  }
  console.log(userInput);
  return (
    <div className="address-modal-conatiner">
      <form>
        <div className="address-options">
          <label for="Name">Name</label> <br />
          <input
            label="Name"
            name="name"
            required
            placeholder="Name"
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
              defaultValue={userInput.country}
              onChange={(e) => changeHandler(e)}
            />
          </label>
        </div>

        <div className="address-options modal-lower-btn">
          <button onClick={ e => saveHandler(e)}>
          Save</button>
          <button onClick={(e) => addDummyAddress(e)}>Add dummy address</button>
          <button
         onClick={()=> addressDispatch({type:"OPEN-MODAL",payload:false})} >Cancel</button>
        </div>
      </form>
    </div>
  );
};
