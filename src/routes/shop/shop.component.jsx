//import SHOP_DATA from "../../shop-data.json";
//import { Fragment, useContext } from "react";
import { Routes, Route } from "react-router-dom";
//import { CategoriesContext } from "../../contexts/categories.context";
//import ProductCard from "../../components/product-card/product-card.component";
import "./shop.styles.scss";
//import CategoryPreview from "../../components/category-preview/category-preview.component";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { useEffect } from "react";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils.js";
import {
  fetchCategoriesAsync,
  fetchCategoriesStart,
  //setCategoriesMap,
  setCategories,
} from "../../store/categories/category.action";
import { useDispatch } from "react-redux";

const Shop = () => {
  //const { products } = useContext(CategoriesContext);

  //const { categoriesMap } = useContext(CategoriesContext);
  //console.log("shop categoriesMap:", categoriesMap);

  ////157. Categories Selectors
  const dispatch = useDispatch();
  // useEffect(() => {
  //   const getCategoriesMap = async () => {
  //     //const categoryMap = await getCategoriesAndDocuments(); //ONLY CATEGORY ITEMS HERE
  //     //console.log("categoryMap: ", categoryMap);
  //     //dispatch(setCategoriesMap(categoryMap)); //be careful: categoryMap here, not categoriesMap
  //     ////158
  //     const categoriesArray = await getCategoriesAndDocuments(); //158.ALL CATEGORIES ITEMS HERE
  //     console.log("categoriesArray:", categoriesArray); //158.ALL CATEGORIES ITEMS HERE
  //     dispatch(setCategories(categoriesArray)); //158.ALL CATEGORIES ITEMS HERE
  //   };
  //   getCategoriesMap();
  // }, []);

  ////171. redux-thunk
  // useEffect(() => {
  //   dispatch(fetchCategoriesAsync());
  // }, []);

  ////175. only need start after saga because saga is listening to the start
  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, []);

  return (
    ////134. Nested Routes in Shop
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
    // <div className="shop-container">
    //   {Object.keys(categoriesMap).map((title) => {
    //     const products = categoriesMap[title];
    //     console.log("products:", products);
    //     return (
    //       <CategoryPreview key={title} title={title} products={products} />
    //     );
    //   })}
    // </div>

    // <Fragment>
    //   {Object.keys(categoriesMap).map((title) => (
    //     <Fragment key={title}>
    //       <h1 className="shop-title">{title}</h1>
    //       <div className="products-container">
    //         {categoriesMap[title].map((product) => (
    //           <ProductCard key={product.id} product={product} />
    //         ))}
    //       </div>
    //     </Fragment>
    //   ))}
    // </Fragment>
  );
};

export default Shop;

////previous: only use products
{
  /* <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div> */
}
