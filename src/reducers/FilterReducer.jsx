const filterReducerFunc = (state, action,e) => {
  switch (action.type) {
    case "LOW_TO_HIGH":
      return { ...state, sorting: "LOW_TO_HIGH" };
    case "HIGH_TO_LOW":
      return { ...state, sorting: "HIGH_TO_LOW" };
    case "RATINGS":
      return { ...state, rating: action.payload };
    case "fiction":
      return{...state,categories:{...state.categories,fiction:!state.categories.fiction}};
    case "spiritual":
      return{...state,categories:{...state.categories,spiritual:!state.categories.spiritual}}; 
    case "biography":
        return{...state,categories:{...state.categories,biography:!state.categories.biography}}; 
    case "horror":
          return{...state,categories:{...state.categories,horror:!state.categories.horror}}; 
    case "PRICE-RANGE":
      return {...state, price:action.price_range}   
    case "CLEAR":
        return{
          sorting:null,
          rating:null, categories:{fiction: false,
            spiritual: false, biography:false, horror: false},
            price:500
        }
    default:
      return state;
  }
};

export { filterReducerFunc };
