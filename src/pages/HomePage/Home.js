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
          <h1 className="align-center quote" >
            Beautify you home with our ART store.
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
                  <h3>{categoryName}</h3>
                </div>
              );
            })}
          </div>

          <div className="slider-img">
            <img
              className="banner-img mrg-lrg"
              src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Books/042021/1500-X-350-Deals-Books-GIF-Banner-Revised.gif"
              alt="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Books/042021/1500-X-350-Deals-Books-GIF-Banner-Revised.gif"
            />
          </div>

          
        </div>
      </article>
    </div>
  );
};
