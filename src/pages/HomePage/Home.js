import React from "react";
import "./Home.css";
import "../../components/Cards/Card.css";
import { Link, useNavigate } from "react-router-dom";
import { categoryApi } from "../../Api/CategoriApi";
import { useFilter } from "../../Context/Filter_context";

export const Home = () => {
  const navigate = useNavigate();
  const { categories } = categoryApi();
  const { dispatch } = useFilter();
  
  return (
    <div>
      <article className="app-container">
        <div className="category-container display-column">
          <h1 className="align-center" id="title">
            Recommendations to start your reading journey
          </h1>
          <div className="category-cards">
            {categories.map(({ categoryName, img }) => {
              return (
                <div
                  className="category-card"
                  onClick={() => {
                    navigate("/products");
                    dispatch({ type: "CLEAR" });
                    dispatch({ type: categoryName });
                   
                  }}
                >
                  <div className="category-tumb">
                    <img src={img} />
                  </div>
                  <p>{categoryName}</p>
                </div>
              );
            })}
          </div>

          <div className="slider-img">
            <img
              className="banner-img mrg-med"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Books/042021/1500-X-350-Deals-Books-GIF-Banner-Revised.gif"
              alt="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Books/042021/1500-X-350-Deals-Books-GIF-Banner-Revised.gif"
            />
          </div>

          <div className="new-arrivals display-column">
            <h1 id="title">new arrivals</h1>
            <div className="new-arrivals-container display-row">
              <div className="new-arrival-card">
                <div className="badge">19%off</div>
                <div className="arrival-product-tumb">
                  <img
                    src="https://images-na.ssl-images-amazon.com/images/I/41IMFnHvpkL._SX328_BO1,204,203,200_.jpg"
                    alt=""
                  />
                </div>
                <div className="arrival-product-details">
                  <span className="product-catagory">
                    {" "}
                    <b>catagory-</b>Self help
                  </span>
                  <h4>
                    <a href="">The Lifestyle Investor</a>
                  </h4>
                  <p>
                    The 10 Commandments of Cash Flow Investing for Passive
                    Income and Financial Freedom
                  </p>
                  <div className="arrival-product-bottom-details">
                    <div className="product-price">
                      <small>₹96.00</small>₹319
                    </div>
                    <div className="product-links">
                      <button>
                        <Link to="/products">
                          <i className="bi bi-suit-heart"></i>
                        </Link>
                      </button>
                      <button>
                        <Link to="/products">
                          <i className="bi bi-cart-check"></i>
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="new-arrival-card">
                <div className="badge">19%off</div>
                <div className="arrival-product-tumb">
                  <img
                    src="https://images-na.ssl-images-amazon.com/images/I/41IMFnHvpkL._SX328_BO1,204,203,200_.jpg"
                    alt=""
                  />
                </div>
                <div className="arrival-product-details">
                  <span className="product-catagory">
                    {" "}
                    <b>catagory-</b>Self help
                  </span>
                  <h4>
                    <a href="">The Lifestyle Investor</a>
                  </h4>
                  <p>
                    The 10 Commandments of Cash Flow Investing for Passive
                    Income and Financial Freedom
                  </p>
                  <div className="arrival-product-bottom-details">
                    <div className="product-price">
                      <small>₹96.00</small>₹319
                    </div>
                    <div className="hor-card-btn">
                      <div className="product-links">
                        <button className="butoon-cart">
                          Move to wishlist
                        </button>
                      </div>
                      <div className="product-links">
                        <button className="butoon-wish">
                          Move to wishlist
                        </button>
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
  );
};
