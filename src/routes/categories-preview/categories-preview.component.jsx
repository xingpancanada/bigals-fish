import {
  Fragment,
  //useContext
} from "react";
import CategoryPreview from "../../components/category-preview/category-preview.component";
//import { CategoriesContext } from "../../contexts/categories.context";
import { useSelector } from "react-redux";
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../store/categories/category.selector";
import { Spinner } from "../../components/spinner/spinner.component";

const CategoriesPreview = () => {
  //const { categoriesMap } = useContext(CategoriesContext);
  ////157. Categories Selectors
  const categoriesMap = useSelector(selectCategoriesMap);
  ////158.

  ////172. isLoading for spinner
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      )}
    </Fragment>
  );
};

export default CategoriesPreview;
