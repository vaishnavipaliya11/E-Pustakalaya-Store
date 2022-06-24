
const addressReducer = (state, action) => {
  switch (action.type) {
    case "GET-ALL-ADDRESS":
      return { ...state, useraddress: action.payload };
    case "OPEN-MODAL":
      return{...state,addressmodal:action.payload}
      case "ADD_NEW_ADDRESS":
        console.log(action.payload);
        return {...state,useraddress:action.payload}
    default:
      state;
  }
};

export { addressReducer };
