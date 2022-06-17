import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAxios } from "../../Api/API";
import { useAuth } from "../../Context/authContext";
import { useCart } from "../../Context/cartContext";
import { add_to_cart } from "../../Utility/addToCart";
import "./singleproduct.css";
export const SingleProduct = () => {
  const [singleproduct, setSingleProduct] = useState("");
  const { product_id } = useParams();
  const { cartState, cartDispatch } = useCart();
  const { addToCart } = cartState;
  const { auth } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    getSingleProduct();
  }, []);

  const getSingleProduct = async () => {
    const response = await axios.get(`/api/products/${product_id}`);
    setSingleProduct(response.data.product);
  };

  console.log(singleproduct);
  return (
    <div className="single-product-main-container">
      <div className="single-product-container">
        <div className="single-product-tumb">
          <img src={singleproduct?.img}></img>
        </div>
        <div className="single-product-details">
          <div>
            <h1>{singleproduct?.title}</h1>
            <p>{singleproduct?.author}</p>
            <p>{singleproduct?.rating}</p>
            <p>
              ₹{singleproduct?.price}{" "}
              <small>
                {" "}
                <s>₹500</s>
              </small>
            </p>
          </div>
          <div>
            {addToCart.find((item) => item._id === singleproduct._id) ? (
              <button
                className="add-to-cart"
                onClick={() => (auth ? navigate("/cart") : navigate("/login"))}
              >
                Go to cart
              </button>
            ) : (
              <button
                className="add-to-cart"
                onClick={() =>
                  auth
                    ? add_to_cart(singleproduct, cartDispatch)
                    : navigate("/login")
                }
              >
                Add to cart
              </button>
            )}
            <button>add to wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};
