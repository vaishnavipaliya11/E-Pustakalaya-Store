import { useState, useEffect } from "react";
import axios from "axios";

const useAxios = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios("./api/products")
    .then((res) => setData(res.data.products));
  }, []);

  console.log(data);

  return { data };
};

export { useAxios };
