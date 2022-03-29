import axios from "axios"
import { useState } from "react"
import { useEffect } from "react/cjs/react.production.min"

const selectedCatApi =()=>{
    const [selectedCat, setSelectedCat] = useState([])

    useEffect(()=>{
        axios(`/api/category/:${_id}`)
        .then((res) => setSelectedCat(res.data.categories))
    })

    return(selectedCat)
}

export {selectedCatApi}