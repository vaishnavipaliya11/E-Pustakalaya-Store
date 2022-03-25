const getRatingProducts = (data, rating) => {

  if(rating === 4 ){
      return [...data].filter((item) => item.rating >= rating )
  }

  if(rating === 3){
      return [...data].filter((item) => item.rating >= rating )
  }
  if(rating === 2){
      return [...data].filter((item) => item.rating >= rating )
  }

  return data
}

export {getRatingProducts}