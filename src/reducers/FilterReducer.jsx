const filterReducerFunc = (state, action) => {
  switch (action.type) {
    case "LOW_TO_HIGH":
      return { ...state, sorting: "LOW_TO_HIGH" };
    case "HIGH_TO_LOW":
      return { ...state, sorting: "HIGH_TO_LOW" };
    case "RATINGS":
      return { ...state, rating: action.payload };
    default:
      return state;
  }
};

export { filterReducerFunc };
