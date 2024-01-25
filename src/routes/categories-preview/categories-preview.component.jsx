import { useSelector } from 'react-redux';
import { CategoriesContainer } from './categories.styles';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import {selectCategoriesMap} from '../../store/categories/category.selector';


const CategoriesPreview = () => {
    const categories = useSelector(selectCategoriesMap);
    console.log('Categories Preview context', categories)

    return ( 
        <CategoriesContainer>
           {Object.keys(categories).map((title) => {
        const products = categories[title];
        return (
          <CategoryPreview  title={title} products={products} />
        );
      })}
        </CategoriesContainer>
     );
}
 
export default CategoriesPreview;