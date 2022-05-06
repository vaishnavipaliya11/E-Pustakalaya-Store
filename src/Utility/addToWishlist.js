import axios from "axios";
import {getUserToken} from "../Utility/getUserToken"
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
        wishListDispatch({ type: "ADD_TO_WISHLIST", payload: data.wishlist });
      } catch (error) {
        console.log(error.response.data);
      }
}