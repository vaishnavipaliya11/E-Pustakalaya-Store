import React from "react";
import { useCart } from "../../Context/cartContext";
import { removeFromCart } from "../../Utility/removeFromCart";
import { qtyHandler } from "../../Utility/qtyHandler";
import "./Cart.css";
import { useWishlist } from "../../Context/wishlistContext";
import { addToWishlist } from "../../Utility/addToWishlist";
const Cart = () => {

  const { cartState, cartDispatch } = useCart();
  const { addToCart } = cartState;

  const {wishListDispatch}= useWishlist()

  let original_price = 0;
  let discount_price = 0;
  let delivery_charges = 0;
  addToCart.forEach((cartData) => {
    original_price += cartData.price * cartData.qty;
    discount_price += cartData.price * cartData.qty * (10 / 100);
    delivery_charges = cartData.price * (15 / 100);
  });

  return (
    <div>
      <article class="main-cart-container">
        <div className="product-scroll">
          <div class="cart-items">
            {addToCart.length === 0 ? (
              <div>
                {" "}
                <h2>Your Cart is Empty</h2>
              </div>
            ) : (
              <div>
                {addToCart.map((cartData) => {
                  const { title, price, categoryName, img, _id } =
                    cartData;
                  return (
                    <div>
                      <div class="products-card-container">
                        <div class="cart-arrival-card">
                          <div
                            class="badge"
                            onClick={() =>
                              removeFromCart(cartData, cartDispatch)
                            }
                          >
                            X
                          </div>
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

                            <div>
                              <button
                                class="cart-qty-plus"
                                type="button"
                                value="+"
                                onClick={() =>
                                  qtyHandler(
                                    cartData,
                                    "increment",
                                    cartDispatch
                                  )
                                }
                              >
                                +
                              </button>

                              <button
                                class="cart-qty-minus"
                                type="button"
                                value="-"
                                onClick={() =>
                                  qtyHandler(
                                    cartData,
                                    "decrement",
                                    cartDispatch
                                  )
                                }
                              >
                                -
                              </button>
                            </div>

                            <div class="product-price">
                              <small>₹96.00</small>₹{price}
                            </div>
                            <div class="cart-product-bottom-details"></div>
                            <div class="product-links">
                              <button
                                class="butoon-wishlist"
                                onClick={() =>
                                  addToWishlist(cartData, wishListDispatch)
                                }
                              >
                                Move to wishlist
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
            )}
          </div>
        </div>

        <div class="price-details-container">
          <div class="price-details">
            <h2 class="align-center">Price Details</h2>
            <div>
              <div class="space-between">
                <h4>Items in cart</h4>
                <h3>{addToCart.length}</h3>
              </div>
              <div class="space-between">
                <h4>Items total price</h4>
                <h3>{original_price}</h3>
              </div>

              <div class="space-between">
                <h4>Discount </h4>
                <h3>{discount_price.toFixed()}</h3>
              </div>

              <div class="space-between">
                <h4>Delivery Charges </h4>
                <h3>{delivery_charges.toFixed()}</h3>
              </div>
              <hr />
              <div class="space-between">
                <h3>Total Pay Amount</h3>
                <h3>{(original_price + discount_price - delivery_charges).toFixed()}</h3>
              </div>
              <hr />
            </div>
            <button class="butoon-place">Place Order</button>
          </div>
        </div>
      </article>
    </div>
  );
};

export { Cart };
