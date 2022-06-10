import axios from "axios";
import { getUserToken } from "./getUserToken";

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

    cartDispatch({ type: "ADD_TO_CART", payload: data.cart })
  } catch (error) {
    console.log(error);
  }
    
}