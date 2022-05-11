import React from "react";
import { useAxios } from "../../Api/API";
import { useFilter } from "../../Context/Filter_context";
import { getCategoryProducts } from "../../Utility/category";
import { getPriceSortedProducts } from "../../Utility/range";
import { getRatingProducts } from "../../Utility/rating";
import { getSorting } from "../../Utility/sorting";
import "./Products.css";
import "../../components/Cards/Card.css";
import { useState } from "react";
import { useCart } from "../../Context/cartContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/authContext";
import { add_to_cart } from "../../Utility/addToCart";
import { useWishlist } from "../../Context/wishlistContext";
import { addToWishlist } from "../../Utility/addToWishlist";
import { removeFromWishlist } from "../../Utility/removeFromWishlist";
const Products = () => {
  const { state, dispatch } = useFilter();
  const { sorting, rating, categories, price } = state;
  const { data } = useAxios();
  const { cartState, cartDispatch } = useCart();
  const { addToCart } = cartState;
  const { auth } = useAuth();
  const navigate = useNavigate();
  const { wishListState, wishListDispatch } = useWishlist();
  const { wishList } = wishListState;

  const finalRatingProducts = getRatingProducts(data, rating);
  const finalCategoryProducts = getCategoryProducts(
    finalRatingProducts,
    categories
  );
  const finalRangeProducts = getPriceSortedProducts(
    finalCategoryProducts,
    price
  );
  const finalSortingProducts = getSorting(finalRangeProducts, sorting);

  const wishlistHandler = (cardData) => {
    if (wishList.find((item) => item._id === cardData._id)) {
      removeFromWishlist(cardData, wishListDispatch);
    } else if (auth) {
      addToWishlist(cardData, wishListDispatch);
    } else {
      navigate("/login");
    }
  };

  return (
    <div>
      <div class="main-container">
        <div class="display-column price-container">
          <div class="product-side-bar">
            <div class="filter-btn">
              <p class="bar-heading">Filters</p>
              <button
                class="bar-heading clear-btn"
                onClick={() => dispatch({ type: "CLEAR" })}
              >
                Clear
              </button>
            </div>

            <div class="price-range-bar">
              <input
                type="range"
                min="120"
                max="500"
                onChange={(e) =>
                  dispatch({ type: "PRICE-RANGE", price_range: e.target.value })
                }
              />

              <div>
                <p>{price}</p>
              </div>
            </div>

            <div class="side-bar-category">
              <p class="bar-heading">Category</p>
              <div>
                <input
                  type="checkbox"
                  name="religious"
                  checked={state.categories.wall}
                  onChange={() => dispatch({ type: "wall" })}
                />
                Wall-Art
              </div>
              <div>
                <input
                  type="checkbox"
                  name="serve"
                  checked={state.categories.serve}
                  onChange={() => dispatch({ type: "serve" })}
                />
                Serving-Art
              </div>

              <div>
                <input
                  type="checkbox"
                  name="weaving"
                  checked={state.categories.weaving}
                  onChange={() => dispatch({ type: "weaving" })}
                />
                Weaving-Art
              </div>

              <div>
                <input
                  type="checkbox"
                  name="decor"
                  checked={state.categories.decor}
                  onChange={() => dispatch({ type: "decor" })}
                />
                Decor-Art
              </div>
            </div>

            <div class="ratings">
              <p class="bar-heading">Ratings</p>
              <div>
                <input
                  type="radio"
                  name="p-ratings"
                  id="best-ratings"

                  checked={state.rating === 4}
                  onChange={() => dispatch({ type: "RATINGS", payload: 4 })}
                />{" "}
                4 & above
              </div>
              <div>
                <input
                  type="radio"
                  name="p-ratings"
                  id="better-ratings"
                  checked={state.rating === 3}
                  onChange={() => dispatch({ type: "RATINGS", payload: 3 })}
                />{" "}
                3 & above
              </div>
              <div>
                <input
                  type="radio"
                  name="p-ratings"
                  id="good-ratings"
                  checked={state.rating === 2}
                  onChange={() => dispatch({ type: "RATINGS", payload: 2 })}
                />{" "}
                2 & above
              </div>
            </div>

            <div class="sort-by">
              <p class="bar-heading">Sort By</p>
              <div>
                <input
                  type="radio"
                  name="sort"
                  id="low-high"
                  checked={state.sorting === "LOW_TO_HIGH"}
                  onChange={() => dispatch({ type: "LOW_TO_HIGH" })}
                />
                Price- low to high
              </div>
              <div>
                <input
                  type="radio"
                  name="sort"
                  id="high-low"
                  checked={state.sorting === "HIGH_TO_LOW"}
                  onChange={() => dispatch({ type: "HIGH_TO_LOW" })}
                />
                Price- high to low
              </div>
            </div>
          </div>
        </div>

        <div className="products-container">
          <h1 id="title" class="align-center">
            {" "}
            Popular Arts{" "}
          </h1>
          <div className="mapped-products">
            {finalSortingProducts.map((cardData) => {
              const { title, price, rating, categoryName, img, _id } = cardData;
              return (
                <div>
                  <div class="products-card-container">
                    <div class="product-card">
                      <div class="badge">
                        {wishList.find((item) => item._id === cardData._id) ? (
                          <button
                            className="clear-btn"
                            onClick={() => wishlistHandler(cardData)}
                          >
                            <i class="bi bi-heart-fill icon-wishlisted"></i>
                          </button>
                        ) : (
                          <button
                            className="clear-btn"
                            onClick={() => wishlistHandler(cardData)}
                          >
                            <i class="bi bi-suit-heart"></i>
                          </button>
                        )}
                      </div>
                      <div class="product-tumb">
                        <img src={img} />
                      </div>
                      <div class="product-details">
                        <span class="product-catagory">
                          {" "}
                          <p>catagory-{categoryName}</p>
                        </span>
                        <p>{title}</p>
                        <p>{rating}⭐</p>
                        <div class="product-bottom-details">
                          <div class="product-price">
                            <small>₹96.00</small>
                            {price}₹
                          </div>
                          <div class="product-links">
                            {addToCart.find(
                              (item) => item._id === cardData._id
                            ) ? (
                              <button
                                className="add-to-cart"
                                onClick={() =>
                                  auth ? navigate("/cart") : navigate("/login")
                                }
                              >
                                Go to cart
                              </button>
                            ) : (
                              <button
                                className="add-to-cart"
                                onClick={() =>
                                  auth
                                    ? add_to_cart(cardData, cartDispatch)
                                    : navigate("/login")
                                }
                              >
                                Add to cart
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Products };
