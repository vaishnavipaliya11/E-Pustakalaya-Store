import { createContext,useContext } from "react";
import { useReducer } from "react";
import { addressReducer } from "../reducers/addressReducer";

const AddressContext = createContext()

const AddressProvider = ({children})=>{
    const [addressState, addressDispatch] = useReducer(addressReducer,{
        useraddress:[] ,addressmodal:false
    })
    return(
        <AddressContext.Provider value={{addressState, addressDispatch}}>
        {children}
        </AddressContext.Provider>
    )

}
const useAddress = () => useContext(AddressContext)

export {useAddress,AddressProvider}