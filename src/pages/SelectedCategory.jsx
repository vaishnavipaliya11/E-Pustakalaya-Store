import React from 'react'
import { useParams} from 'react-router-dom'
import { categoryApi} from "../Api/CategoriApi";
import { Link } from 'react-router-dom';

const SelectedCategory = () => {
    const {categories} = categoryApi()
    const {_id} = useParams()
    console.log(_id)

  return (
    <div>SelectedCategory
    
    {categories.map(({_id,categoryName,img}) =>{
        return(
            <div>
            <Link to={`/categories/${_id}`}>
            <p>{_id}</p>
            <h1>{categoryName}</h1>
            <img src={img}></img>
            </Link>
            </div>
        )
    })}
    
    </div>
  )
}


export default SelectedCategory