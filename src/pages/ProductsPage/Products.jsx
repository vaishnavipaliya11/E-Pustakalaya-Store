import React from "react";
import { useAxios } from "../../Api/API";
import { useFilter } from "../../Context/Filter_context";
import { getCategoryProducts } from "../../Utility/category";
import { getPriceSortedProducts } from "../../Utility/range";
import { getRatingProducts } from "../../Utility/rating";
import { getSorting } from "../../Utility/sorting";
import "./Products.css";
import "../../components/Cards/Card.css"
import { Link } from "react-router-dom";

const Products = () => {

  const { state, dispatch } = useFilter();
  const { sorting, rating , categories, price } = state;
  const { data } = useAxios();

 
  const finalRatingProducts= getRatingProducts(data,rating)
  const finalCategoryProducts = getCategoryProducts(finalRatingProducts,categories)
  const finalRangeProducts = getPriceSortedProducts(finalCategoryProducts,price)
  const finalSortingProducts= getSorting(finalRangeProducts,sorting)
  

  return (
    <div>
      <div class="main-container">
        <div class="display-column price-container">
          <aside class="product-side-bar">
            <div class="filter-btn">
              <p class="bar-heading">Filters</p>
              <button class="bar-heading clear-btn"
              onClick={() => dispatch({type:"CLEAR"})}
              >Clear</button>
            </div>

            <div class="price-range-bar">
            <input type="range" min= "100" max="500" 
            onChange={(e) =>dispatch({type:"PRICE-RANGE", price_range:e.target.value})}/>
           
            <div>
             <p>{price}</p>
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
         <h1 id="title" class="align-center"> Popular Books </h1>
         <div className="mapped-products">
         {finalSortingProducts.map(({ title, price, rating, categoryName,img}) => {
         
          return (
            <div>
            <div class="products-card-container">
            <div class="product-card">
                <div class="badge">{rating}</div>
                <div class="product-tumb">
                    <img src={img}
                        />
                </div>
                <div class="product-details">
                    <span class="product-catagory"> <b>catagory-</b>{categoryName}</span>
                    <h4><a href="">{title}</a></h4>
                    <p>Learn how to sleep peacefully</p>
                    <div class="product-bottom-details">
                        <div class="product-price"><small>₹96.00</small>{price}₹</div>
                        <div class="product-links">
                          <button className="clear-btn">
                          <Link to="wishlist"><i class="bi bi-suit-heart"></i></Link>
                          </button> 
                          
                          <button className="clear-btn">
                          <Link to="cart"><i class="bi bi-cart-check"></i></Link>
                          </button>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
              
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
