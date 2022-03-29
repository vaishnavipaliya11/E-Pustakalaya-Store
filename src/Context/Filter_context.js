import { createContext, useContext, useReducer } from "react";
import { filterReducerFunc } from "../reducers/FilterReducer";

const FilterContext = createContext()

const useFilter = () => useContext(FilterContext)

const FilterProvider = ({children}) => {

    const [state,dispatch] = useReducer(filterReducerFunc,{
        sorting: null,rating:null, categories:{fiction: false,
            spiritual: false, biography:false, horror: false},
            price:500, addToCart: [],  cartItemsCount:0,
            ItemsCost:0,
            totalCost:0,
            deliveryCharge:40,decreaseItem:[],increaseItem:[],moveToWishlist:[]
        });

        return(
            <FilterContext.Provider value={{state,dispatch}}>
            {children}
            </FilterContext.Provider>
        )
}

export {useFilter, FilterProvider}