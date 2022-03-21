import { useAxios } from "../Api/API";

const getDiscountedProducts = (discount) => {
    const {data} = useAxios()

    if(discount === "RATING_HIGH"){
        return [...data].filter((item) => item.discount >= discount )
    }

    return data
}

export {getDiscountedProducts}