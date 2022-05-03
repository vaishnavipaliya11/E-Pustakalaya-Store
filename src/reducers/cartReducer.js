const cartReducer = (state, action) => {
    console.log(action.payload);
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, addToCart: action.payload };

    default:
      return state;
  }
};

export{cartReducer}