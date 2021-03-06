import React from "react";
import "./NavBar.css";
import { Link, useNavigate } from "react-router-dom";
import "../../pages/index";
import { useAuth } from "../../Context/authContext";
import { useCart } from "../../Context/cartContext";
import { useWishlist } from "../../Context/wishlistContext";
import toast from "react-hot-toast";
import { useFilter } from "../../Context/Filter_context";
const Navbar = () => {
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();
  const { cartState } = useCart();
  const { addToCart } = cartState;
  const { wishListState } = useWishlist();
  const { wishList } = wishListState;
  const { state, dispatch } = useFilter();

  return (
    <div>
      <nav class="topnav">
        <header class="nav">
          <nav class="nav-left">
            <h2 className="nav-title main-heading" 
            onClick={() => navigate("/")}>Infinity-Art</h2>
           
            <Link class="gray-title" to="/products">
              <h4 id="nav-title">Shop Now</h4>
            </Link>
          </nav>
          

          <div>
            <input
              type="search"
              placeholder="Search for products"
              className="search-input"
              onChange={(e) => {
                navigate("/products");
                dispatch({ type: "SEARCH", payload: e.target.value });
              }}
            />
          </div>
          <div class="icon-container">
            <Link class="topnav-link" to="/wishlist">
              <h3>
                <i class="bi bi-suit-heart-fill"></i>
                <span class="cart-badge">{wishList.length}</span>
              </h3>
            </Link>

            <Link class="topnav-link" to="/cart">
              <h3>
                <i class="bi bi-cart-check-fill"></i>
                <span class="cart-badge">{addToCart.length}</span>
              </h3>
            </Link>

            {auth ? (
              <Link class="topnav-link" to="/profile">
                <h3>
                <i class="bi bi-person-fill"></i>
                </h3>
              </Link>
            ) : (
              <h3 onClick={() => navigate("/login")}>
                
                <span></span>
              </h3>
            )}
          </div>
        </header>
      </nav>
    </div>
  );
};

export { Navbar };
