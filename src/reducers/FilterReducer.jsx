const filterReducerFunc = (state, action) => {
  switch (action.type) {
    case "LOW_TO_HIGH":
      return { ...state, sorting: "LOW_TO_HIGH" };
    case "HIGH_TO_LOW":
      return { ...state, sorting: "HIGH_TO_LOW" };
    case "RATINGS":
      return { ...state, rating: action.payload };
    case "serve":
      return {
        ...state,
        categories: { ...state.categories, serve: !state.categories.serve },
      };
    case "wall":
      return {
        ...state,
        categories: {
          ...state.categories,
          wall: !state.categories.wall,
        },
      };
    case "weaving":
      return {
        ...state,
        categories: {
          ...state.categories,
          weaving: !state.categories.weaving,
        },
      };
    case "decor":
      return {
        ...state,
        categories: { ...state.categories, decor: !state.categories.decor },
      };
    case "PRICE-RANGE":
      return { ...state, price: action.price_range };

    case "CLEAR":
      return {
        sorting: null,
        rating: null,
        categories: {
          fiction: false,
          spiritual: false,
          biography: false,
          horror: false,
        },
        price: 500,
        addToCart: [],
        cartItemsCount: 0,
        ItemsCost: 0,
        totalCost: 0,
        deliveryCharge: 40,
        decreaseItem: [],
        increaseItem: [],
        moveToWishlist: [],
        removeFromWishlist: [],
        removeFromCart: [],
      };

    case "ADD-TO-CART":
      return {
        ...state,
        addToCart: [...state.addToCart, { ...action.payload }],
        cartItemsCount: state.cartItemsCount + 1,
        totalCost:
          Number(state.deliveryCharge) +
          Number(state.totalCost) +
          Number(action.payload.price),
        ItemsCost: Number(state.ItemsCost) + Number(action.payload.price),
      };

    case "REMOVE-FROM-CART":
      return {
        ...state,
        addToCart: [
          ...state.addToCart.filter((item) => {
            return action.payload._id !== item._id;
          }),
        ],
        totalCost:
          Number(state.totalCost) -
          Number(action.payload.price) -
          Number(state.deliveryCharge),
        ItemsCost: Number(state.ItemsCost) - Number(action.payload.price),
        cartItemsCount: state.cartItemsCount - 1,
      };

    case "DECREASE-ITEM":
      if (state.cartItemsCount && state.totalCost && state.ItemsCost > 0) {
        return {
          ...state,
          decreaseItem: [...state.decreaseItem, { ...action.payload }],
          cartItemsCount: state.cartItemsCount - 1,
          totalCost:
            Number(state.totalCost) -
            Number(action.payload.price) -
            Number(state.deliveryCharge),
          ItemsCost: Number(state.ItemsCost) - Number(action.payload.price),
        };
      } else {
        return {
          ...state,
          decreaseItem: [...state.decreaseItem, { ...action.payload }],
          cartItemsCount: state.cartItemsCount,
          totalCost: state.totalCost,
          ItemsCost: state.ItemsCost,
        };
      }

    case "INCREASE-ITEM":
      return {
        ...state,
        increaseItem: [...state.increaseItem, { ...action.payload }],
        cartItemsCount: state.cartItemsCount + 1,
        totalCost: Number(state.totalCost) + Number(action.payload.price),
        ItemsCost: Number(state.ItemsCost) + Number(action.payload.price),
      };

    case "REMOVE-FROM-WISHLIST":
      return {
        ...state,
        moveToWishlist: [
          ...state.moveToWishlist.filter((item) => {
            return action.payload._id !== item._id;
          }),
        ],
        wishCount: state.wishCount - 1,
      };

    case "MOVE-TO-WISHLIST":
      return {
        ...state,
        moveToWishlist: [...state.moveToWishlist, { ...action.payload }],
        wishCount: state.wishCount + 1,
      };

    default:
      return state;
  }
};

export { filterReducerFunc };
