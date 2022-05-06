import React from "react";
import "./Wishlist.css";
import { useWishlist } from "../../Context/wishlistContext";
import { useCart } from "../../Context/cartContext";
import { removeFromWishlist } from "../../Utility/removeFromWishlist";
import { add_to_cart } from "../../Utility/addToCart";
import {qtyHandler} from "../../Utility/qtyHandler"
function Wishlist() {
  const { cartState,cartDispatch } = useCart();
  const {addToCart}= cartState
  const { wishListState, wishListDispatch } = useWishlist();
  const { wishList } = wishListState;

  const moveToCart=(cardData)=>{
    if (addToCart.find((item) => item._id === cardData._id)) {
      qtyHandler(cardData, "increment", cartDispatch);
      removeFromWishlist(cardData, wishListDispatch);
    } else {
      add_to_cart(cardData, cartDispatch);
      removeFromWishlist(cardData, wishListDispatch);
    }
  }

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
                        removeFromWishlist(cardData, wishListDispatch)
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
                          onClick={() =>moveToCart(cardData)}
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
