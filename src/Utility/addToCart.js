import axios from "axios";
import { getUserToken } from "./getUserToken";

export const addToCart = async(product,cartDispatch) =>{
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
}