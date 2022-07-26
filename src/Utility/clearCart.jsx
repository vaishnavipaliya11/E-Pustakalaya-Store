import axios from "axios";
import { getUserToken } from "./getUserToken";
import toast from "react-hot-toast";
export const clearCart = async(cartDispatch) =>{

  try {
    const {data}= await axios.post(
      "/api/user/cart/clearCart",
      {
         
      },
      {
        headers: {
          authorization: getUserToken(), 
        },
      }
    );
    cartDispatch({ type: "CLEAR_DISPATCH", payload: data.cart })
  } catch (error) {
    toast.error("Something went wrong!!")
    console.error(error);
  }
    
}