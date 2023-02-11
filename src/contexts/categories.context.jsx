import { createContext, useState, useEffect } from "react";
//import SHOP_DATA from "../shop-data.js";
import {
  //addCollectionAndDocuments,
  getCategoriesAndDocuments,
} from "../utils/firebase/firebase.utils.js";

// export const ProductsContext = createContext({
//   products: [],
// });

// export const ProductsProvider = ({ children }) => {
//   const [products, setProducts] = useState([]);

////132.Using our categoriesMap
export const CategoriesContext = createContext({
  CategoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  //////129. add collection and documents
  ////only use for the first time for uploading data
  // useEffect(() => {
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // });

  ////130. get products and categories from firestore
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log("categoryMap: ", categoryMap);
      setCategoriesMap(categoryMap); //be careful: categoryMap here, not categoriesMap
    };
    getCategoriesMap();
  }, []);
  //   categoryMap:
  // {fish: Array(9), hats: Array(9), jackets: Array(5), mens: Array(6), sneakers: Array(8), …}
  // fish
  // :
  // (9) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
  // hats
  // :
  // (9) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
  // jackets
  // :
  // (5) [{…}, {…}, {…}, {…}, {…}]
  // mens
  // :
  // (6) [{…}, {…}, {…}, {…}, {…}, {…}]
  // sneakers
  // :
  // (8) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
  // womens
  // :
  // (7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}]

  //const value = { products };

  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
