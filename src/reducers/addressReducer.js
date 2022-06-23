
const addressReducer = (state, action) => {
  switch (action.type) {
    case "GET-ALL-ADDRESS":
      console.log(action.payload);
      return { ...state, useraddress: action.payload };

    default:
      state;
  }
};

export { addressReducer };
