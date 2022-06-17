import { createContext, useContext, useReducer } from "react";
import { filterReducerFunc } from "../reducers/FilterReducer";

const FilterContext = createContext()

const useFilter = () => useContext(FilterContext)

const FilterProvider = ({children}) => {

    const [state,dispatch] = useReducer(filterReducerFunc,{
        sorting: null,rating:null, categories:{serve: false,
            wall: false, weaving:false, decor: false},
            price:500,
        });

        return(
            <FilterContext.Provider value={{state,dispatch}}>
            {children}
            </FilterContext.Provider>
        )
}

export {useFilter, FilterProvider}