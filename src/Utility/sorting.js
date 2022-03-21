import { useAxios } from "../Api/API";

const getSorting = (sorting) => {
  const { data } = useAxios();
  console.log(data);

  if (sorting === "LOW_TO_HIGH") {
    return [...data].sort((a, b) => a.price - b.price);
  }

  if (sorting === "HIGH_TO_LOW") {
    return [...data].sort((a, b) => b.price - a.price);
  }

  return data;
};

console.log("function sorting", getSorting);

export { getSorting };
