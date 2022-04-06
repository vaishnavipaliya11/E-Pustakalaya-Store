const getCategoryProducts = (data, categories) => {
  let categoryFilterArr = [];

  if (
    categories.serve === false && categories.wall === false &&
    categories.weaving === false && categories.decor === false
  ) {
    return data;
  }

  if (categories.serve) {
    let catFilterData = [...data].filter(
      (item) => item.categoryName.toLowerCase() === "serve"
    );
    categoryFilterArr.push(...catFilterData);
  }

  if (categories.wall) {
    let catFilterData = [...data].filter(
      (item) => item.categoryName.toLowerCase() === "wall"
    );
    categoryFilterArr.push(...catFilterData);
  }

  if (categories.weaving) {
    let catFilterData = [...data].filter(
      (item) => item.categoryName.toLowerCase() === "weaving"
    );
    categoryFilterArr.push(...catFilterData);
  }

  if (categories.decor) {
    let catFilterData = [...data].filter(
      (item) => item.categoryName.toLowerCase() === "decor"
    );
    categoryFilterArr.push(...catFilterData);
  }
  return categoryFilterArr;
};

export { getCategoryProducts };
