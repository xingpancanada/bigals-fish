import { createSelector } from "reselect"; //163. Reselect Library

////163.after this change, if categories have no change, feed back with the previous state
const selectCategoryReducer = (state) => state.categories;
export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);
export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => {
    return categories.reduce((accumulator, category) => {
      const { title, items } = category; //all items here
      accumulator[title.toLowerCase()] = items; //only category items via title
      return accumulator;
    }, {});
  }
);

///172. add for spinner
export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);

//export const selectCategoriesMap = (state) => state.categories.categoriesMap;
////158.
// export const selectCategoriesMap = (state) =>
//   state.categories.categories.reduce((accumulator, category) => {
//     const { title, items } = category; //all items here
//     accumulator[title.toLowerCase()] = items; //only category items via title
//     return accumulator;
//   }, {});
