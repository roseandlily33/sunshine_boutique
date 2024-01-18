import { useContext } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import { CategoriesContainer } from './categories.styles';
import CategoryPreview from '../../components/category-preview/category-preview.component';


const CategoriesPreview = () => {
    const {categories} = useContext(CategoriesContext);
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