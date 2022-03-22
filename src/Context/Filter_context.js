import { createContext, useContext, useReducer } from "react";
import { filterReducerFunc } from "../reducers/FilterReducer";

const FilterContext = createContext()

const useFilter = () => useContext(FilterContext)

const FilterProvider = ({children}) => {

    const [state,dispatch] = useReducer(filterReducerFunc,{
        sorting: null,rating:null
        });

        return(
            <FilterContext.Provider value={{state,dispatch}}>
            {children}
            </FilterContext.Provider>
        )
}

export {useFilter, FilterProvider}