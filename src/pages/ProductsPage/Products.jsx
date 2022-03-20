import React from "react";
import "./Products.css";

const Products = () => {
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
                <input type="range" min="100" max="1000" value="10" class="myslider" id="sliderRange"/>
                <p>Value: <span id="demo">12</span></p>
            </div>
        </div>

        <div class="side-bar-category">
            <p class="bar-heading">Category</p>
            <div>
                <input type="checkbox" name="religious" id="religious"/>Religious
            </div>
            <div>
                <input type="checkbox" name="fiction" id="fiction"/>Fiction
            </div>
            <div>
                <input type="checkbox" name="science" id="science"/>Science
            </div>
            <div>
                <input type="checkbox" name="thriller" id="thriller"/>Thriller
            </div>
        </div>

        <div class="ratings">
            <p class="bar-heading">Ratings</p>
            <div><input type="radio" name="p-ratings" id="best-ratings"/> 4 & above</div>
            <div><input type="radio" name="p-ratings" id="better-ratings"/> 3 & above</div>
            <div><input type="radio" name="p-ratings" id="good-ratings"/> 2 & above</div>
            
        </div>

        <div class="sort-by">
            <p class="bar-heading">Sort By</p>
            <div>
                <input type="radio" name="sort" id="l-h"/>Price- low to high
            </div>
            <div>
                <input type="radio" name="sort" id="high-low"/>Price- high to low
            </div>
        </div>
    </aside>
        </div>

        <div class="products-container">
          <h1 id="title" class="align-center">
            Popular Books
          </h1>
          
        </div>
      </div>
    </div>
  );
};

export { Products };
