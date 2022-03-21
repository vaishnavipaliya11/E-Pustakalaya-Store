import React from "react";
import { useAxios } from "../../Api/API";
import { useFilter } from "../../Context/Filter_context";
import { getDiscountedProducts } from "../../Utility/rating";
import { getSorting } from "../../Utility/sorting";
import "./Products.css";

const Products = () => {
  const { data } = useAxios();
  const { state, dispatch } = useFilter();
  const { sorting } = state;

  return (
    <div>
      <div class="main-container">
        <div class="display-column price-container">
          <aside class="product-side-bar">
            <div class="filter-btn">
              <p class="bar-heading">Filters</p>
              <p class="bar-heading">Clear</p>
            </div>

            <div class="price-range-bar">
              <div class="rangeslider">
                <p class="bar-heading">Price</p>
                <input
                  type="range"
                  min="100"
                  max="1000"
                  value="10"
                  class="myslider"
                  id="sliderRange"
                />
                <p>
                  Value: <span id="demo">12</span>
                </p>
              </div>
            </div>

            <div class="side-bar-category">
              <p class="bar-heading">Category</p>
              <div>
                <input type="checkbox" name="religious" id="religious" />
                Religious
              </div>
              <div>
                <input type="checkbox" name="fiction" id="fiction" />
                Fiction
              </div>
              <div>
                <input type="checkbox" name="science" id="science" />
                Science
              </div>
              <div>
                <input type="checkbox" name="thriller" id="thriller" />
                Thriller
              </div>
            </div>

            <div class="ratings">
              <p class="bar-heading">Ratings</p>
              <div>
                <input type="radio" name="p-ratings" id="best-ratings" 
                onChange={()=> dispatch({type:"RATINGS"})}/> 4 &
                above
              </div>
              <div>
                <input type="radio" name="p-ratings" id="better-ratings" /> 3 &
                above
              </div>
              <div>
                <input type="radio" name="p-ratings" id="good-ratings" /> 2 &
                above
              </div>
            </div>

            <div class="sort-by">
              <p class="bar-heading">Sort By</p>
              <div>
                <input
                  type="radio"
                  name="sort"
                  id="low-high"
                  onChange={() => dispatch({ type: "LOW_TO_HIGH" })}
                />
                Price- low to high
              </div>
              <div>
                <input type="radio" name="sort" id="high-low" 
                onChange={() => dispatch({ type: "HIGH_TO_LOW" })}
                />
                Price- high to low
              </div>
            </div>
          </aside>
        </div>

        <div class="products-container">
         <h1> Popular Books </h1>
         <div>
         {getSorting(sorting).map(({ name, price }) => {
          return (
            <div>
              <p>{name}</p>
              <h2>{price}</h2>
            </div>
          );
        })}

        {getDiscountedProducts(discount).map(({ name, price }) => {
          return (
            <div>
              <p>{name}</p>
              <h2>{price}</h2>
              <p>{discount}</p>
            </div>
          );
        })}
         </div> 
         
        </div>
      </div>
    </div>
  );
};

export { Products };
