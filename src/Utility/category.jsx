const getCategoryProducts = (data, categories) => {
  let categoryFilterArr = [];

  if (
    categories.fiction === false && categories.spiritual === false &&
    categories.biography === false && categories.horror === false
  ) {
    return data;
  }

  if (categories.fiction) {
    let catFilterData = [...data].filter(
      (item) => item.categoryName.toLowerCase() === "fiction"
    );
    categoryFilterArr.push(...catFilterData);
  }

  if (categories.spiritual) {
    let catFilterData = [...data].filter(
      (item) => item.categoryName.toLowerCase() === "spiritual"
    );
    categoryFilterArr.push(...catFilterData);
  }

  if (categories.biography) {
    let catFilterData = [...data].filter(
      (item) => item.categoryName.toLowerCase() === "biography"
    );
    categoryFilterArr.push(...catFilterData);
  }

  if (categories.horror) {
    let catFilterData = [...data].filter(
      (item) => item.categoryName.toLowerCase() === "horror"
    );
    categoryFilterArr.push(...catFilterData);
  }
  return categoryFilterArr;
};

export { getCategoryProducts };
