import axios from "axios";
import react from "react";
import { getUserToken } from "./getUserToken";

const addNewAddress = async(address, addressDispatch) => {

  const response  =await axios.post(
    "/api/user/address/",
    { address },
    { headers: { authorization: getUserToken() } }
  );
  
  addressDispatch({type:"ADD_NEW_ADDRESS",payload:response.data.address})
};

export { addNewAddress };
