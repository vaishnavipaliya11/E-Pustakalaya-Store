import axios from "axios";
import { getUserToken } from "./getUserToken";
import toast from "react-hot-toast";
export const add_to_cart = async(product,cartDispatch) =>{

  try {
    const {data}= await axios.post(
      "/api/user/cart",
      {
          product,
      },
      {
        headers: {
          authorization: getUserToken(), 
        },
      }
    );
    toast.success("added to cart")
    cartDispatch({ type: "ADD_TO_CART", payload: data.cart })
  } catch (error) {
    console.log(error);
  }
    
}