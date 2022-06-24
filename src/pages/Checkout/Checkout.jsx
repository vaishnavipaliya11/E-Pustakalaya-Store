import React, { useEffect, useState } from "react";
import { AddressModal } from "../../components/address/addressModal";
import { useAddress } from "../../Context/addressContext";
import { useCart } from "../../Context/cartContext";
import { getAllAddress } from "../../Utility/getAllAddress";
import "./Checkout.css";
export const Checkout = () => {
  const { cartState } = useCart();
  const { addToCart } = cartState;
  const { addressState, addressDispatch } = useAddress();
  const { useraddress, addressmodal } = addressState;
  const [ selectedAdd, setSelectedAdd ] = useState();
  console.log(useraddress);

  let originalPrice = 0;
  let delivery_charges = 0;
  addToCart?.forEach((cartData) => {
    originalPrice = originalPrice + cartData?.price * cartData?.qty;
    delivery_charges = delivery_charges + cartData?.price * (15 / 100);
  });
  useEffect(() => {
    getAllAddress(addressDispatch);
  }, []);

  console.log(useraddress);
  console.log(selectedAdd);
  return (
    <div className="checkout-container">
      <div className="address-block">
        <p>Address</p>
        <div className="address-container">
          <div className="address-card">
            <div className="edit-btn">
              <button
                onClick={() =>
                  addressDispatch({ type: "OPEN-MODAL", payload: true })
                }
              >
                edit{" "}
              </button>
              {addressmodal ? <AddressModal /> : ""}
            </div>

            {useraddress?.map((address) => (
              <label key={address?._id} className="address-radio">
                <input
                  type="radio"
                  name="address"
                  checked={selectedAdd?._id === address?._id}
                  onChange={() => setSelectedAdd(address)}
                />
                <div>
                  <h3>{address?.name}</h3>
                  <address className="address-card-text">
                    <span>{address?.street},</span>
                    <span>{address?.state},</span>
                    <span>{address?.country},</span>
                    <span>{address?.zipCode},</span>
                    <span>{address?.mobile},</span>
                  </address>
                </div>
              </label>
            ))}
          </div>
        </div>
        {!useraddress?.length && <h2>Add address to continue payment</h2>}

        {addressmodal ? <AddressModal /> : ""}
        <button
          className="new-address-btn add-to-cart"
          onClick={() => addressDispatch({ type: "OPEN-MODAL", payload: true })}
        >
          Add new address +
        </button>
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
            <div class="">
              <h3>Delivery Address</h3>
              <hr />

              {selectedAdd ? (
                <div>
                  <address className="address-card-text">
                    <span>{selectedAdd?.street},</span>
                    <span>{selectedAdd?.state},</span>
                    <span>{selectedAdd?.country},</span>
                    <span>{selectedAdd?.zipCode},</span>
                    <span>{selectedAdd?.mobile},</span>
                  </address>
                </div>
              ) : (
                ""
              )}

            
            </div>
          </div>
          <button class="butoon-place">Proceed to pay </button>
        </div>
      </div>
    </div>
  );
};
