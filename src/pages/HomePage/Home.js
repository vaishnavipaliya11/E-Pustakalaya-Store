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
          <h1 className="align-center quote">
            Beautify you home with our ART store.
          </h1>

          <div className="slider-img" 
          >
            <img
              className="banner-img "
              src="https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvbWUlMjBkZWNvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="banner"
            />
            <button className="banner-btn" onClick={()=> navigate("/products")} 
            >Shop Now <i class="bi bi-cart"></i> </button>
          </div>

          <div className="div-centered">
            <h1 className="category-heading">CATEGORIES</h1>
          </div>
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

          <h1 className="align-center quote">
            New Arrivals
          </h1>

          <div className="arrivals-card-box">
            <div className="new-arrival-card">
            <div className="arrival-product-tumb">
            <img
           
            src="https://i.etsystatic.com/8628115/r/il/d107f0/1154011749/il_340x270.1154011749_qxhn.jpg"
            alt=""
          />
            </div>
            
              <div className="arrival-product-details">
                <h4 className="card-title">wall paint</h4>
                <p>Infinite-store special clay Arts</p>
                <p className="card-text">
                  Rs 299 <span className="discount-para">(50% off)</span>
                </p>
                <button
                  className="arrival-card-btn"
                  onClick={() => navigate("/products")}
                >
                  View More
                </button>
              </div>
            </div>

            <div className="new-arrival-card">
              <div className="arrival-product-tumb">
                <img
                  src="https://i.etsystatic.com/29095631/c/800/635/0/88/il/c5d544/3858270899/il_340x270.3858270899_qzrp.jpg"
                  alt=""
                />
              </div>

              <div className="arrival-product-details">
                <h4>Servings</h4>
                <p>Infinite-store special serve for dinning</p>
                <p className="card-text">
                  Rs 499 <span className="discount-para">(50% off)</span>
                </p>
                <button
                  className="arrival-card-btn"
                  onClick={() => navigate("/products")}
                >
                  View More
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};
