import axios from "axios";
import react from "react";
import { getUserToken } from "./getUserToken";

const addNewAddress = async(address, addressDispatch) => {
  console.log(address);
  console.log("called");

  const response  =await axios.post(
    "/api/user/address/",
    { address },
    { headers: { authorization: getUserToken() } }
  );
  console.log(response.data.address);
  addressDispatch({type:"ADD_NEW_ADDRESS",payload:response.data.address})
};

export { addNewAddress };
