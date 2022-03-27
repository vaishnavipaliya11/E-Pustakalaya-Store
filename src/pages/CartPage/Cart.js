import React from 'react'
import { useFilter } from '../../Context/Filter_context'
import "./Cart.css"

const Cart = () => {
  const {state} = useFilter()
  const {addToCart}= state
  return (
  <div>
    <h1>this is cart page</h1>
    
  <article class="main-cart-container">
        <div class="cart-items">
        {addToCart.map(({title, price, categoryName,rating,img}) =>{
          return (
            <div>
            <div class="products-card-container">
                <div class="cart-arrival-card">
                    <div class="badge">{rating}</div>
                    <div class="cart-product-tumb">
                        <img src={img}
                            alt=""/>
                    </div>
                    <div class="cart-product-details">
                        <span class="product-catagory"> <b>catagory-</b>{categoryName}</span>
                        <h2>{title}</h2>
                        
                        <div class="product-price"><small>₹96.00</small>₹{price}</div>
                        <div class="cart-product-bottom-details">
                        </div>
                        <div class="product-links">
                            <button class="butoon-wishlist">Move to wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            </div>
           
             </div>

             
          )
          })}
            
            
        </div>
        <div class="price-details-container">
            <div class="price-details">
                <h2 class="align-center">Price Details</h2>
                <div>
                    <div class="space-between">
                        <h4>price(2 Items)</h4>
                        <h3>₹499</h3>
                    </div>
                    <div class="space-between">
                        <h4>Discount</h4>
                        <h3>₹499</h3>
                    </div>
                    <div class="space-between">
                        <h4>delivery charges</h4>
                        <h3>₹100</h3>
                    </div>
                    <hr/>
                    <div class="space-between">
                        <h3>delivery charges</h3>
                        <h3>₹100</h3>
                    </div>
                    <hr/>
                </div>
                <button class="butoon-place">Place Order</button>
            </div>
        </div>
    </article>
    
  </div>
   

  )
}

export {Cart}