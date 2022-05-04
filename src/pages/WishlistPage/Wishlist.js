import React from "react";
import "./Wishlist.css";
import { useFilter } from "../../Context/Filter_context";
import { useWishlist } from "../../Context/wishlistContext";
function Wishlist() {
  const { state, dispatch } = useFilter();
  const { moveToWishlist, addToCart } = state;

  const { wishListState, wishListDispatch } = useWishlist();
  const { wishList } = wishListState;

  function calMoveToCart(price, rating, categoryName, title, img, _id) {
    addToCart.find((product) => product._id === _id)
      ? dispatch({
          type: "INCREASE-ITEM",
          payload: { price, rating, categoryName, title, img, _id },
        })
      : dispatch({
          type: "ADD-TO-CART",
          payload: { price, rating, categoryName, title, img, _id },
        });
  }

  console.log("wishlist called");

  return (
    <div>
      <div className="product-scroll">
        <div class="cart-items">
          {wishList.map((cardData) => {
            const { title, price, categoryName, rating, img, _id } = cardData;
            return (
              <div>
                <div class="products-card-container">
                  <div class="cart-arrival-card">
                    <button
                      class="badge wish-badge"
                      onClick={() =>
                        dispatch({
                          type: "REMOVE-FROM-WISHLIST",
                          payload: {
                            price,
                            rating,
                            categoryName,
                            title,
                            img,
                            _id,
                          },
                        })
                      }
                    >
                      X
                    </button>
                    <div class="cart-product-tumb">
                      <img src={img} alt="" />
                    </div>
                    <div class="cart-product-details">
                      <span class="product-catagory">
                        {" "}
                        <b>catagory-</b>
                        {categoryName}
                      </span>
                      <h2>{title}</h2>

                      <div class="product-price">
                        <small>₹96.00</small>₹{price}
                      </div>
                      <div class="cart-product-bottom-details"></div>
                      <div class="product-links wishlist-cards">
                        <button
                          class="wishlist-btn"
                          onClick={() =>
                            // dispatch({type:"ADD-TO-CART",
                            // payload:{title, price, categoryName, rating, img, _id }})
                            calMoveToCart(
                              price,
                              rating,
                              categoryName,
                              title,
                              img,
                              _id
                            )
                          }
                        >
                          Move to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export { Wishlist };
