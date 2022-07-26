const cartReducer = (state, action) => {

  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, addToCart: action.payload };
    case "REMOVE_FROM_CART":
      return{...state, addToCart:action.payload};
      case "INCREMENT_DECREMENT":
      return{...state,addToCart:action.payload}
      case "CLEAR_DISPATCH":
        return{...state, addToCart:action.payload}
    default:
      return state;
  }
};

export{cartReducer}