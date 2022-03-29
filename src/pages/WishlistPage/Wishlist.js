import React from 'react'
import "./Wishlist.css"
import { useFilter } from "../../Context/Filter_context";
function Wishlist () {
  const {state}= useFilter();
  const {moveToWishlist} = state;
  return (
    <div>
    <p> this is wishlist page </p>
    <div className="product-scroll">
          <div class="cart-items">
            {moveToWishlist.map(({ title, price, categoryName, rating, img }) => {
              return (
                <div>
                  <div class="products-card-container">
                    <div class="cart-arrival-card">
                      <div class="badge">{rating}</div>
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

                        

                        <div class="product-price">
                          <small>₹96.00</small>₹{price}
                        </div>
                        <div class="cart-product-bottom-details"></div>
                        <div class="product-links">
                          <button class="butoon-wishlist" 
                          onClick={() => dispatch({type:"ADD-TO-CART", 
                          payload:{price, rating, categoryName, title,img}})}>
                            Add TO Cart
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
    </div>
  )
}

export { Wishlist }