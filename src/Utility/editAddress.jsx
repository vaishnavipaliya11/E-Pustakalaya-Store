import axios from "axios";
import toast from "react-hot-toast";
import { getUserToken } from "./getUserToken";

const updateAddress = async (address, addressDispatch) => {
  try {
    const {data} = await axios.post(
      `/api/user/address/${address._id}`,
      {
        address,
      },
      {
        headers: { authorization: getUserToken() },
      }
    );
  
    addressDispatch({type:"UPDATE_ADDRESS", payload:data.address})
    
  } catch (error) {
    toast.error("Something went wrong!!")
    console.error(error)
  }
 
};

export { updateAddress };