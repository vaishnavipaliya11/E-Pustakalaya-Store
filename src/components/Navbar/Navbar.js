import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import "../../pages/index";

const Navbar = () => {
  return (
    <div>
      <nav class="topnav">
        <header class="nav">
          <nav class="nav-left">
            <h2 className="nav-title main-heading">Infinity-BookStore</h2>
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
            <Link class="topnav-link" to="/login">
              <span>
                <i class="bi bi-person-fill"></i>
              </span>
            </Link>
            <Link class="topnav-link" to="/wishlist">
              <span>
                <i class="bi bi-suit-heart-fill"></i>
              </span>
            </Link>
            <Link class="topnav-link" to="/cart">
              <span>
                <i class="bi bi-cart-check-fill"></i>
              </span>
            </Link>
          </div>
        </header>
      </nav>
    </div>
  );
};

export { Navbar };
