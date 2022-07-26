import { createContext,useContext } from "react";
import { useReducer } from "react";
import { orderReducer } from "../reducers/orderReducer";

const OrderContext = createContext()

const OrderProvider = ({children})=>{
    const [orderState, orderDispatch] = useReducer(orderReducer,{
        orders:[]
    })
    return(
        <OrderContext.Provider value={{orderState, orderDispatch}}>
        {children}
        </OrderContext.Provider>
    )

}
const useOrder = () => useContext(OrderContext)

export {useOrder,OrderProvider}