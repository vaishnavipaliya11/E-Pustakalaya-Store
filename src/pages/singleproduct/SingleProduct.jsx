import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../Context/authContext";
import { useCart } from "../../Context/cartContext";
import { useWishlist } from "../../Context/wishlistContext";
import { add_to_cart } from "../../Utility/addToCart";
import { addToWishlist } from "../../Utility/addToWishlist";
import { removeFromWishlist } from "../../Utility/removeFromWishlist";
import "./singleproduct.css";
export const SingleProduct = () => {
  const [singleproduct, setSingleProduct] = useState("");
  const { product_id } = useParams();
  const { cartState, cartDispatch } = useCart();
  const { addToCart } = cartState;
  const { wishListState, wishListDispatch } = useWishlist();
  const { wishList } = wishListState;
  const { auth } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    getSingleProduct();
  }, []);

  const getSingleProduct = async () => {
    const response = await axios.get(`/api/products/${product_id}`);
    setSingleProduct(response.data.product);
  };

  const wishlistHandler = (cardData) => {
    if (wishList.find((item) => item._id === cardData._id)) {
      removeFromWishlist(cardData, wishListDispatch);
    } else if (auth) {
      addToWishlist(cardData, wishListDispatch);
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="single-product-main-container">
      <div className="single-product-container">
        <div className="single-product-tumb">
          <img src={singleproduct?.img}></img>
        </div>
        <div className="single-product-details">
          <div className="single-product-descrption">
            <h1>{singleproduct?.title}</h1>
            <p>{singleproduct?.author}</p>
            <p>{singleproduct?.rating}⭐</p>
            <p>
              ₹{singleproduct?.price}{" "}
              <small style={{ color: "gray" }}>
                {" "}
                <s>₹500</s>
              </small>
            </p>
          </div>
          <hr />
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
            {wishList.find((item) => item._id === singleproduct._id) ? (
              <button
                className="add-to-cart"
                onClick={() =>
                  auth ? navigate("/wishlist") : navigate("/login")
                }
              >
                Go to wishlist
              </button>
            ) : (
              <button
                className="add-to-cart"
                onClick={() =>
                  auth ? wishlistHandler(singleproduct) : navigate("/login")
                }
              >
                Add to wishlist
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
