export const orderReducer = (state,action)=>{
switch (action.type) {
    case "ADD_NEW_ORDER":
       
        return{...state, orders:action.payload}
    default:
        state;
}
}