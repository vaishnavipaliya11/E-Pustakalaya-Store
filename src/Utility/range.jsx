const getPriceSortedProducts = (data, price) =>{

  if(price)
   return [...data].filter((item) => item.price <= price)
   
  return data 
  
}



export {getPriceSortedProducts}