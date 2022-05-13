import axios from "axios";
import { getUserToken } from "./getUserToken";
export const removeFromWishlist= async(product,wishListDispatch)=>{
    const { _id } = product;
    try {
      const { data } = await axios.delete(`/api/user/wishlist/${_id}`, {
        headers: {
          authorization: getUserToken(),
        },
      });
      wishListDispatch({ type: "REMOVE_FROM_WISHLIST", payload:data.wishlist });
    } catch (error) {
      console.log(error);
    }
}