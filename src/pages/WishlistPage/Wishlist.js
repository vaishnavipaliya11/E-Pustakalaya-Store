import React from 'react'
import "./Wishlist.css"
import { useFilter } from "../../Context/Filter_context";
function Wishlist () {
  const {state,dispatch}= useFilter();
  const {moveToWishlist,addToCart} = state;

  function calMoveToCart(price, rating, categoryName, title,img,_id){
    addToCart.find((product) => product._id === _id) ?  dispatch({type:"INCREASE-ITEM", 
    payload:{price, rating, categoryName, title,img,_id}}) : dispatch({type:"ADD-TO-CART", 
    payload:{price, rating, categoryName, title,img,_id}})
  
  }

  return (
    <div>
  
    <div className="product-scroll">
          <div class="cart-items">
            {moveToWishlist.map(({ title, price, categoryName, rating, img,_id }) => {
              console.log(addToCart.find((product) => product._id === _id) )
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
                        <div class="product-links wishlist-cards">
                          <button class="wishlist-btn" 
                          
                          onClick={()=> calMoveToCart(price, rating, categoryName, title,img,_id)}>
                            Move to Cart
                          </button>

                          <button class="wishlist-btn" 
                          onClick={() => dispatch({type:"REMOVE-FROM-WISHLIST", 
                          payload:{price, rating, categoryName, title,img,_id}})}>
                            Remove from wish
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