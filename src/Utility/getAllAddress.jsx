import axios from "axios";
import {getUserToken} from "../Utility/getUserToken"
import toast from "react-hot-toast";
export const getAllAddress = async(addressDispatch) =>{

  try {
    const {data}= await axios.get(
        "/api/user/address",
      {
        headers: {
          authorization:getUserToken() , 
        },
      }
    );
   
    // toast.success("added to cart")
    addressDispatch({ type: "GET-ALL-ADDRESS", payload: data.address })
  } catch (error) {
    console.log(error);
  }
    
}