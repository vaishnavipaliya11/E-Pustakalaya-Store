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
          wall: false,
          weaving: false,
          decor: false,
          serve: false,
        },
        price: 500,
        
      };

  

   

    




   

    default:
      return state;
  }
};

export { filterReducerFunc };
