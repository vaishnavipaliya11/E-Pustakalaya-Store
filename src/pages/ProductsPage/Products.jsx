import React from "react";
import { useAxios } from "../../Api/API";
import { useFilter } from "../../Context/Filter_context";
import { getCategoryProducts } from "../../Utility/category";
import { getRatingProducts } from "../../Utility/rating";
import { getSorting } from "../../Utility/sorting";
import "./Products.css";

const Products = () => {

  const { state, dispatch } = useFilter();
  const { sorting, rating , categories } = state;
  const { data } = useAxios();

 
  const finalRatingProducts= getRatingProducts(data,rating)
  const finalCategoryProducts = getCategoryProducts(finalRatingProducts,categories)
  const finalSortingProducts= getSorting(finalCategoryProducts,sorting)
  

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
                <input type="checkbox" name="religious"
                onChange={()=> dispatch({type:"spiritual"})}/>
                Spiritual
              </div>
              <div>
                <input type="checkbox" name="fiction"
                onChange={()=> dispatch({type:"fiction"})}/>
                Fiction
              </div>

              <div>
                <input type="checkbox" name="fiction"
                onChange={()=> dispatch({type:"biography"})}/>
                Biography
              </div>

              <div>
                <input type="checkbox" name="fiction"
                onChange={()=> dispatch({type:"horror"})}/>
                Horror
              </div>
              
            </div>

            <div class="ratings">
              <p class="bar-heading">Ratings</p>
              <div>
                <input type="radio" name="p-ratings" id="best-ratings" 
                onChange={()=> dispatch({type:"RATINGS", payload:4})}/> 4 &
                above
              </div>
              <div>
                <input type="radio" name="p-ratings" id="better-ratings"
                onChange={()=> dispatch({type:"RATINGS", payload:3})}  /> 3 &
                above
              </div>
              <div>
                <input type="radio" name="p-ratings" id="good-ratings"
                onChange={()=> dispatch({type:"RATINGS", payload:2})} /> 2 &
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

        <div className="products-container">
         <h1> Popular Books </h1>
         {finalSortingProducts.map(({ title, price, rating, categoryName}) => {
          return (
            <div>
              <h2>{title}</h2>
              <h3>{price}</h3>
              <p>{rating}</p>
              <p>{categoryName}</p>
            </div>
          );
        })}
         
        </div>
      </div>
    </div>
  );
};

export { Products };
