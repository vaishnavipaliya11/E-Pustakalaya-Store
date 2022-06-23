import React, { useEffect } from "react";
import { useAddress } from "../../Context/addressContext";
import { useCart } from "../../Context/cartContext";
import { getAllAddress } from "../../Utility/getAllAddress";
import "./Checkout.css";
export const Checkout = () => {
  const { cartState } = useCart();
  const { addToCart } = cartState;
  const { addressState, addressDispatch } = useAddress();
  const { useraddress } = addressState;
  console.log(useraddress);
  console.log(addToCart);
  let originalPrice = 0;
  let delivery_charges = 0;
  addToCart?.forEach((cartData) => {
    originalPrice = originalPrice + cartData?.price * cartData?.qty;
    delivery_charges = delivery_charges + cartData?.price * (15 / 100);
  });
  useEffect(() => {
    getAllAddress(addressDispatch);
  }, []);
  return (
    <div className="checkout-container">
      <div>
        <p>Address</p>
        <div className="address-container">
          <div className="address-card">
            {useraddress?.map((address) => (
              <label key={address._id} className="address-radio">
                <input type="radio" name="address" />
                <div>
                  <h3>{address.name}</h3>
                  <address className="address-card-text">
                    <span>{address.street},</span>
                    <span>{address.state},</span>
                    <span>{address.country},</span>
                    <span>{address.zipCode},</span>
                    <span>{address.mobile},</span>
                  </address>
                </div>
              </label>
            ))}
          </div>
        </div>
        {!useraddress.length && <h2>Add address to continue payment</h2>}

        <button className="new-address-btn">Add new address +</button>
      </div>
      <div class="checkout-details-container">
        <div class="checkout-details">
          <h2 class="align-center">Price Details</h2>
          <div>
            <div class="space-between">
              <h4>Purchased Item</h4>
              <h3>{addToCart?.title}</h3>
            </div>
            <div class="space-between">
              <h4>Price Details</h4>
              <h3>{originalPrice}</h3>
             
            </div>
            
            <div class="space-between">
              <h4>Delivery Charges</h4>
              <h3>{delivery_charges?.toFixed()}</h3>
              
            </div>
            <div class="space-between">
              <h3>Total</h3>
              <h3>{(originalPrice + delivery_charges)?.toFixed()}</h3>
            </div>
            <hr />
            <div class="space-between">
              <h3>Delivery Address</h3>
             
            </div>
          </div>
          <button class="butoon-place" onClick={() => navigate("/checkout")}>
            Proceed to pay{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
