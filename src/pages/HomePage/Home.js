import React from 'react';
// import "../../components/Cards"
import "./Home.css";

export const Home = () => {
  return (
    
    <div>
    
    <article className="app-container">

<div className="category-container display-column">
  <h1 className="align-center" id="title">Recommendations to start your reading journey</h1>
  <div className="category-cards">
    <a className="link-no-style" href="/products.html">
      <div className="category-card">
        <div className="category-tumb">
          <img src="https://images-na.ssl-images-amazon.com/images/G/31/img21/Books/072021/bookshprefresh/434-X-530-Halo-Indian._SY530_QL85_.jpg" alt=""/>
        </div>
      </div>
    </a>
    <a className="link-no-style" href="/products.html">
      <div className="category-card">
        <div className="category-tumb">
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/31/img21/Books/072021/bookshprefresh/434-X-530-Halo-Unrec_Bestsellers._SY530_QL85_.jpg"
            alt=""/>
        </div>
      </div>
    </a>
    <a className="link-no-style" href="/products.html">
      <div className="category-card">
        <div className="category-tumb">
          <img
            src="https://images.ctfassets.net/40akseett7bn/4Gi3SRU8ij5B07fugTFUfO/3568b4722bd96ecec3d0de6d19589fc7/Category-Wall-Art.jpg"
            alt=""/>
        </div>
      </div>
    </a>
    <a className="link-no-style" href="/products.html">
      <div className="category-card">
        <div className="category-tumb">
          <img src="https://images-na.ssl-images-amazon.com/images/G/31/img21/Books/072021/bookshprefresh/434-X-530-Halo-Unrec_Discounts._SY530_QL85_.jpg"
            alt=""/>
        </div>
      </div>
    </a>
    <a className="link-no-style" href="/products.html">
      <div className="category-card">
        <div className="category-tumb">
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/31/img21/Books/072021/bookshprefresh/434-X-530-Halo-Unrec_Expert_Picks._SY530_QL85_.jpg"
            alt=""/>
        </div>
      </div>
    </a>
  </div>
  <div className="slider-img">
    <img className="banner-img mrg-med"
      src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Books/042021/1500-X-350-Deals-Books-GIF-Banner-Revised.gif"
      alt=""/>
  
  </div>
  <div className="new-arrivals display-column">
    <h1 id="title">new arrivals</h1>
    <div className="new-arrivals-container display-row">
      <div className="new-arrival-card">
        <div className="badge">19%off</div>
        <div className="arrival-product-tumb">
          <img src="https://images-na.ssl-images-amazon.com/images/I/41IMFnHvpkL._SX328_BO1,204,203,200_.jpg"
            alt=""/>
        </div>
        <div className="arrival-product-details">
          <span className="product-catagory"> <b>catagory-</b>Self help</span>
          <h4><a href="">The Lifestyle Investor</a></h4>
          <p>The 10 Commandments of Cash Flow Investing for Passive Income and Financial Freedom</p>
          <div className="arrival-product-bottom-details">
            <div className="product-price"><small>₹96.00</small>₹319</div>
            <div className="product-links">
              <a href=""><i className="bi bi-suit-heart"></i></a>
              <a href=""><i className="bi bi-cart-check"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="new-arrival-card">
        <div className="badge">19%off</div>
        <div className="arrival-product-tumb">
          <img src="https://images-na.ssl-images-amazon.com/images/I/41IMFnHvpkL._SX328_BO1,204,203,200_.jpg"
            alt=""/>
        </div>
        <div className="arrival-product-details">
          <span className="product-catagory"> <b>catagory-</b>Self help</span>
          <h4><a href="">The Lifestyle Investor</a></h4>
          <p>The 10 Commandments of Cash Flow Investing for Passive Income and Financial Freedom</p>
          <div className="arrival-product-bottom-details">
            <div className="product-price"><small>₹96.00</small>₹319</div>
            <div className="hor-card-btn">
              <div className="product-links">
                <button className="butoon-cart">Move to wishlist</button>
              </div>
              <div className="product-links">
                <button className="butoon-wish">Move to wishlist</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</article>
    </div>
  )
}






