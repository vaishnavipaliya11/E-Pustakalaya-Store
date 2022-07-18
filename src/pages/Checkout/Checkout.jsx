import React, { useEffect, useState } from "react";
import { AddressModal } from "../../components/address/addressModal";
import { useAddress } from "../../Context/addressContext";
import { useCart } from "../../Context/cartContext";
import { useOrder } from "../../Context/orderContext";
import { getAllAddress } from "../../Utility/getAllAddress";
import { addOrders } from "../../Utility/addOrders";
import "./Checkout.css";
import { useNavigate } from "react-router-dom";
export const Checkout = () => {
  const { cartState } = useCart();
  const navigate = useNavigate();
  const { addToCart } = cartState;
  const { addressState, addressDispatch } = useAddress();
  const { useraddress, addressmodal } = addressState;
  const [selectedAdd, setSelectedAdd] = useState();
  const [editModal, setEditModal] = useState(false);
  const { orderDispatch } = useOrder();
  let originalPrice = 0;
  let delivery_charges = 0;
  addToCart?.forEach((cartData) => {
    originalPrice = originalPrice + cartData?.price * cartData?.qty;
    delivery_charges = delivery_charges + cartData?.price * (15 / 100);
  });
  useEffect(() => {
    getAllAddress(addressDispatch);
  }, []);

  const loadScript = async (url) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = url;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const displayRazorpayModal = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      toast.error("Something went wrong.");
      return;
    }
    const options = {
      key: "rzp_test_GtfIaWmsadE9fA",
      amount: (originalPrice + delivery_charges)?.toFixed() * 100,
      currency: "INR",
      name: "",
      description: "Thanks for shopping with us!",
      image: "/favicon.ico",
      handler: function (response) {
        const paymentId = response.razorpay_payment_id;

        addOrders({ products: addToCart, address: selectedAdd }, orderDispatch);
    
        // clearCart();
        navigate("/orders");
      },

      prefill: {
        name: "Adarsh Balika",
        email: "xyz@example.com",
        contact: "7744552200",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const handlePayment = () => {
    displayRazorpayModal();
  };

  return (
    <div className="checkout-container">
      <div className="address-block">
        <p>Address</p>

        <div className="address-container">
          <div className="address-card">
            {useraddress?.map((address) => (
              <label key={address?._id} className="address-radio">
                <div className="edit-btn">
                  <button
                    onClick={() => {
                      setEditModal(true);
                      addressDispatch({
                        type: "ADDRESS_ID",
                        payload: address?._id,
                      });
                    }}
                  >
                    edit
                  </button>
                  {editModal ? (
                    <AddressModal
                      address={address}
                      updating={true}
                      editModal={true}
                      setEditModal={setEditModal}
                    />
                  ) : (
                    ""
                  )}
                </div>
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

        <button
          className="new-address-btn add-to-cart"
          onClick={() => addressDispatch({ type: "OPEN-MODAL", payload: true })}
        >
          Add new address +
        </button>
        {addressmodal ? <AddressModal updating={false} /> : ""}
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

          {selectedAdd && originalPrice > 0?
            <button
            class="butoon-place"
            
            onClick={() => {
              handlePayment();
            }}
          >
            Proceed to pay{" "}
          </button>: 
        "" }
          
        </div>
      </div>
    </div>
  );
};
