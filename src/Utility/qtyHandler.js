import axios from "axios";
import { getUserToken } from "./getUserToken";
import toast from "react-hot-toast";
export const qtyHandler =async (product,value,cartDispatch) =>{
    const { _id } = product;
  try {
    const { data } = await axios.post(
      `/api/user/cart/${_id}`,
      {
        action: {
          type: value,
        },
      },
      {
        headers: {
          authorization: getUserToken(),
        },
      }
    );
    cartDispatch({ type: "INCREMENT_DECREMENT", payload: data.cart });
  } catch (error) {
    toast.error("Sometihing went wrong!!")
    console.log(error.response.data);

  }
}