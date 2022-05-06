import { createContext, useContext, useReducer } from "react";
import { wishListReducer } from "../reducers/wishlistReducer";

const WishListContext = createContext();
const WishListProvider = ({ children }) => {
  const [wishListState, wishListDispatch] = useReducer(wishListReducer, {
    wishList: [],
  });
  return (
    <WishListContext.Provider value={{ wishListState, wishListDispatch }}>
      {children}
    </WishListContext.Provider>
  );
};

const useWishlist = () => useContext(WishListContext);

export { useWishlist, WishListProvider };
