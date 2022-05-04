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

makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <FilterProvider>
          <WishListProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </WishListProvider>
        </FilterProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
