import React from "react";
import { Link } from "react-router-dom";
import "./ordercard.css";

export const OrderCard = ({ order }) => {
  return (
    <div className="order-container">
      <h4>Order Confirmed !!</h4>
      <div>
        <p>Order ID :{order?._id} </p>
      </div>

      <div className="order-card-container">
        {order?.products?.map((item) => {
          return (
            <div className="product-cards">
              <div class="product-card">
                <div class="product-tumb">
                  <img src={item?.img} />
                </div>
                <div class="product-details">
                  <p>{item?.title}</p>

                  <div class="product-bottom-details">
                    <div class="product-price">
                      <small>₹96.00</small>
                      {item?.price}₹
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <h4>Delivery Address</h4>
      <div className="order-address-container">
        
        <address className="card-text">
          <p>mobile{order?.address?.mobile}</p>
          <p>street-{order?.address?.street}</p>
          <p>zipCode-{order?.address?.zipCode}</p>
          <p>state-{order?.address?.state}</p>
          <p>country-India</p>
        </address>
      </div>
      <div></div>
    </div>
  );
};
