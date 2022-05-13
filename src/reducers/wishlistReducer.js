export const wishListReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      return { ...state, wishList: action.payload };
      case "REMOVE_FROM_WISHLIST":
        return{...state,wishList:action.payload}
    default:
      return state;
  }
};
