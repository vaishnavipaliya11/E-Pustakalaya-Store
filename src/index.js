import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { FilterProvider } from "./Context/Filter_context";
import { AuthProvider } from "./Context/authContext";
import { CartProvider } from "./Context/cartContext";
import{WishListProvider} from "./Context/wishlistContext";
import { AddressProvider } from "./Context/addressContext";
import { OrderProvider } from "./Context/orderContext";

makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <AddressProvider>
      <AuthProvider>
        <FilterProvider>
          <WishListProvider>
            <CartProvider>
            <OrderProvider>
         
              <App />
              </OrderProvider>
            </CartProvider>
          </WishListProvider>
        </FilterProvider>
      </AuthProvider>
      </AddressProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
