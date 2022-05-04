import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import "../../pages/index";
import { useAuth } from "../../Context/authContext";
import { useCart } from "../../Context/cartContext";
import { useWishlist } from "../../Context/wishlistContext";

const Navbar = () => {
  const { auth, setAuth } = useAuth();

  const { cartState } = useCart();
  const { addToCart } = cartState;
  const { wishListState } = useWishlist();
  const { wishList } = wishListState;

  const logOutHandler = () => {
    setAuth(localStorage.removeItem("token"));
    navigate("/login");
  };
  return (
    <div>
      <nav class="topnav">
        <header class="nav">
          <nav class="nav-left">
            <h2 className="nav-title main-heading">Infinity-Art</h2>
            <Link class="gray-title" to="/">
              <h4 id="nav-title">Home</h4>
            </Link>
            <Link class="gray-title" to="/products">
              <h4 id="nav-title">Shop Now</h4>
            </Link>
          </nav>
          <div class="align-center">
            <div class="search-bar">
              <input
                type="search"
                name="email"
                placeholder="Search"
                class="input-rounded"
              />
              <button class="link-no-style search-bar-btn">
                <i style={{ fontSize: "1.5rem" }} class="bi bi-search"></i>
              </button>
            </div>
          </div>

          <div class="icon-container">
            {auth ? (
              <Link class="topnav-link" to="/login">
                <h3 onClick={logOutHandler}>
                  <i class="bi bi-box-arrow-right"></i>
                </h3>
              </Link>
            ) : (
              <h3>
                <i class="bi bi-person-fill"></i>
                <span></span>
              </h3>
            )}

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
          </div>
        </header>
      </nav>
    </div>
  );
};

export { Navbar };
