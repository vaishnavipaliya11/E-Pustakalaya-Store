import axios from "axios";
import { getUserToken } from "./getUserToken";
import toast from "react-hot-toast";
export const removeFromWishlist= async(product,wishListDispatch)=>{
    const { _id } = product;
    try {
      const { data } = await axios.delete(`/api/user/wishlist/${_id}`, {
        headers: {
          authorization: getUserToken(),
        },
      });
      toast.success("Product removed")
      wishListDispatch({ type: "REMOVE_FROM_WISHLIST", payload:data.wishlist });
    } catch (error) {
      toast.error("Something went wrong!!")
      console.log(error);
    }
}