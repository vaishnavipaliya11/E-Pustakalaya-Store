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
          sorting: null,rating:null, categories:{fiction: false,
              spiritual: false, biography:false, horror: false},
              price:500, addToCart: [],  cartItemsCount:0,
              ItemsCost:0,
              totalCost:0,
              deliveryCharge:40,decreaseItem:[],increaseItem:[]
              ,moveToWishlist:[],removeFromWishlist:[], removeFromCart:[]
          }

    case "ADD-TO-CART":
     return{...state,addToCart:[...state.addToCart,{...action.payload}]
    , cartItemsCount:state.cartItemsCount+1,
    totalCost: Number(state.deliveryCharge) + Number(state.totalCost) + Number(action.payload.price),
    ItemsCost:Number(state.ItemsCost) + Number(action.payload.price)}   

    case "REMOVE-FROM-CART":
      return{...state,addToCart: [...state.addToCart.filter(item => {
      return action._id !== item._id})],
      totalCost: Number(state.totalCost) - Number(action.payload.price)- Number(state.deliveryCharge) ,
      ItemsCost:Number(state.ItemsCost) - Number(action.payload.price),
      cartItemsCount:state.cartItemsCount-1
    }
 
    case "DECREASE-ITEM":
      return{...state, decreaseItem:[...state.decreaseItem,{...action.payload}],
      cartItemsCount:state.cartItemsCount-1,
      totalCost: Number(state.totalCost) - Number(action.payload.price)- Number(state.deliveryCharge) ,
      ItemsCost:Number(state.ItemsCost) - Number(action.payload.price)
    }

    case "INCREASE-ITEM":
      return{...state, increaseItem:[...state.increaseItem,{...action.payload}],
    cartItemsCount:state.cartItemsCount + 1,
    totalCost: Number(state.totalCost) + Number(action.payload.price) ,
    ItemsCost:Number(state.ItemsCost) + Number(action.payload.price)
    }

    case "REMOVE-FROM-WISHLIST":
      return{...state,moveToWishlist: [...state.moveToWishlist.filter(item => {
      return action._id !== item._id})],
    }

    case "MOVE-TO-WISHLIST":
      return{...state, moveToWishlist:[...state.moveToWishlist,{...action.payload}]}
    default:
      return state;
  }
};

export { filterReducerFunc };
