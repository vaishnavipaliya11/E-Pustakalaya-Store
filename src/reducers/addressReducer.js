const addressReducer = (state, action) => {
  switch (action.type) {
    case "GET-ALL-ADDRESS":
      return { ...state, useraddress: action.payload };
    case "OPEN-MODAL":
      return { ...state, addressmodal: action.payload };
    case "ADD_NEW_ADDRESS":
      return { ...state, useraddress: action.payload };
    case "EDIT_ADDRESS":
      return { ...state, editaddress: action.payload };
    case "ADDRESS_ID":
      return { ...state, addressId: action.payload };
    case "UPDATE_ADDRESS":
      return { ...state, useraddress: action.payload };
    default:
      state;
  }
};

export { addressReducer };
