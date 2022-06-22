import React from "react";
import { useCart } from "../../Context/cartContext";
import "./Checkout.css"
export const Checkout = () => {
  const { cartState } = useCart();
  const { addToCart } = cartState;

  let originalPrice = 0;
  let delivery_charges = 0;
  addToCart?.forEach((cartData) => {
    originalPrice = originalPrice + cartData?.price * cartData?.qty;
    delivery_charges = delivery_charges + cartData?.price * (15 / 100);
  });
  return (
    <div className="checkout-container">
      <div>
        <p>Address</p>
      </div>
      <div class="checkout-details-container">
          <div class="checkout-details">
            <h2 class="align-center">Price Details</h2>
            <div>
              <div class="space-between">
                <h4>Type of Products</h4>
                <h3>{addToCart?.length}</h3>
              </div>
              <div class="space-between">
                <h4>Items total price</h4>
                <h3>{originalPrice}</h3>
              </div>

              <div class="space-between">
                <h4>Delivery Charges </h4>
                <h3>{delivery_charges?.toFixed()}</h3>
              </div>
              <hr />
              <div class="space-between">
                <h3>Total Pay Amount</h3>
                <h3>{(originalPrice + delivery_charges)?.toFixed()}</h3>
              </div>
              <hr />
            </div>
            <button class="butoon-place"
            onClick={()=> navigate("/checkout")}>Proceed to pay </button>
          </div>
        </div>
    </div>
  );
};
