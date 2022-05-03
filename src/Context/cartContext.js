import { createContext, useContext, useReducer } from "react";

const CartContext = createContext()

const CartProvider = ({children}) =>{
    const [cartState, cartDispatch]= useReducer(cartReducer, {
        addToCart:[]
    })
return(
    <CartContext.Provider value={{cartState,cartDispatch}}>
    {children}
    </CartContext.Provider>
)
}

const useCart = () => useContext(CartContext)

export {useCart, CartProvider}