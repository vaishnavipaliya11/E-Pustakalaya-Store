import axios from "axios";
import { getUserToken } from "./getUserToken";

export const removeFromCart = async (product, cartDispatch) => {
  const { _id } = product;
  try {
    const { data } = await axios.delete(`/api/user/cart/${_id}`, {
      headers: {
        authorization: getUserToken(),
      },
    });
    cartDispatch({ type: "REMOVE_FROM_CART", payload: data.cart });
  } catch (error) {
    console.log(error);
  }
};
