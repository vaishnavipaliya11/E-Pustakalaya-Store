import React from "react";
import { useNavigate } from "react-router-dom";
import { OrderCard } from "../../components/OrderCard";
import UserSideBar from "../../components/user-side-bar/UserSideBar";
import { useOrder } from "../../Context/orderContext";

export const Order = () => {
  const navigate = useNavigate()
  const {
    orderState: { orders },
  } = useOrder();

  return (
    <div className="profile-container">
      <div>
        {!orders.length && (
          <div>
            <h3>No orders available</h3>
            <button className="add-to-cart" onClick={() => navigate("/products")}>shop</button>
          </div>
        )}
        {orders.map((order) => (
          <OrderCard key={order._id} order={order} />
        ))}
      </div>
    </div>
  );
};
