import React from "react";
import { useCart } from "../../Context/cartContext";
import { useFilter } from "../../Context/Filter_context";
import { removeFromCart } from "../../Utility/removeFromCart";
import "./Cart.css";

const Cart = () => {
  const { state, dispatch } = useFilter();
  const { cartItemsCount, ItemsCost, totalCost, qty } = state;

  const { cartState,cartDispatch } = useCart();
  const { addToCart } = cartState;
  return (
    <div>
      <article class="main-cart-container">
        <div className="product-scroll">
          <div class="cart-items">
            {addToCart.map((cartData) => {
              const { title, price, categoryName, rating, img, _id } = cartData;
              return (
                <div>
                  <div class="products-card-container">
                    <div class="cart-arrival-card">
                      <div
                        class="badge"
                        onClick={() =>
                          removeFromCart(cartData,cartDispatch)
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
                              dispatch({
                                type: "INCREASE-ITEM",
                                payload: { price },
                              })
                            }
                          >
                            +
                          </button>

                          <button
                            class="cart-qty-minus"
                            type="button"
                            value="-"
                            onClick={() =>
                              dispatch({
                                type: "DECREASE-ITEM",
                                payload: { price },
                              })
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
                              dispatch({
                                type: "MOVE-TO-WISHLIST",
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
        </div>

        <div class="price-details-container">
          <div class="price-details">
            <h2 class="align-center">Price Details</h2>
            <div>
              <div class="space-between">
                <h4>Items in cart</h4>
                <h3>{cartItemsCount}</h3>
              </div>
              <div class="space-between">
                <h4>Items total price</h4>
                <h3>{ItemsCost}</h3>
              </div>

              <div class="space-between">
                <h4>Items quantity</h4>
                <h3>{qty}</h3>
              </div>
              <hr />
              <div class="space-between">
                <h3>Total Pay Amount</h3>
                <h3>{ItemsCost}</h3>
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
