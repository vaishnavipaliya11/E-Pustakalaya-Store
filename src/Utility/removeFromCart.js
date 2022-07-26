import axios from "axios";
import { getUserToken } from "./getUserToken";
import toast from "react-hot-toast";
export const removeFromCart = async (product, cartDispatch) => {
  const { _id } = product;
  console.log(product);
  try {
    const { data } = await axios.delete(`/api/user/cart/${_id}`, {
      headers: {
        authorization: getUserToken(),
      },
    });
    toast.success("Product removed");
    cartDispatch({ type: "REMOVE_FROM_CART", payload: data.cart });
  } catch (error) {
    toast.error("Something went wrong!!");
    console.log(error);
  }
};
