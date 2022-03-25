const getSorting = (data, sorting) => {
  if (sorting === "LOW_TO_HIGH") {
    return [...data].sort((a, b) => a.price - b.price);
  }

  if (sorting === "HIGH_TO_LOW") {
    return [...data].sort((a, b) => b.price - a.price);
  }

  return data;
};

export { getSorting };
