import{useEffect,useState} from "react"
import axios from 'axios'

const categoryApi = ()=>{
    const [categories, setCategories] = useState([])
  
    useEffect(()=>{
        axios("/api/categories")
        .then((res)=> setCategories(res.data.categories))
      },[])

      return {categories}
}

export {categoryApi}


    