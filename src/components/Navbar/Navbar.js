import React from "react";
import "./NavBar.css";
import { Link, useNavigate } from "react-router-dom";
import "../../pages/index";
import { useAuth } from "../../Context/authContext";
import { useCart } from "../../Context/cartContext";
import { useWishlist } from "../../Context/wishlistContext";
import toast from "react-hot-toast";
const Navbar = () => {
  const { auth, setAuth } = useAuth();
const navigate = useNavigate()
  const { cartState } = useCart();
  const { addToCart } = cartState;
  const { wishListState } = useWishlist();
  const { wishList } = wishListState;

  const logOutHandler = () => {
    setAuth(localStorage.removeItem("token"));
    toast.success("logout successfully!!")
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
              <Link class="topnav-link" to="/login">
                <h3 onClick={logOutHandler}>
                  <i class="bi bi-box-arrow-right"></i>
                </h3>
              </Link>
            ) : (
              <h3 onClick={()=> navigate("/login")}>
                <i class="bi bi-person-fill"></i>
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
