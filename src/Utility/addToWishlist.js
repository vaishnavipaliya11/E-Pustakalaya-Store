import axios from "axios";
import {getUserToken} from "../Utility/getUserToken"
import toast from "react-hot-toast";
export const addToWishlist = async(product,wishListDispatch)=>{
    try {
        const { data } = await axios.post(
          `/api/user/wishlist`,
          {
            product
          },
          {
            headers: {
              authorization: getUserToken(),
            },
          }
        );
        toast.success("Product wishlisted")
        wishListDispatch({ type: "ADD_TO_WISHLIST", payload: data.wishlist });
      } catch (error) {
        toast.error("Something went wrong!!")
        console.log(error.response.data);
      }
}