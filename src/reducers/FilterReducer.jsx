const filterReducerFunc = (state, action) => {
    console.log("clicked");
  switch (action.type) {
    case "LOW_TO_HIGH":
      return { ...state, sorting: "LOW_TO_HIGH" };
    case "HIGH_TO_LOW":
      return{...state, sorting:"HIGH_TO_LOW"};
    case "RATINGS_HIGH":
      return{...state,rating:"RATING_HIGH"}
    default:
      return state;
  }
};


export {filterReducerFunc}
