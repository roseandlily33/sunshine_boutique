import ProductCard from '../product-card/product-card.component';
import { CategoryPreviewContainer, Preview } from './category-preview.styles';
import { Link } from 'react-router-dom';
import Spinner from '../spinner/spinner.component';
import { selectCategoriesLoading } from '../../store/categories/category.selector';
import { useSelector } from 'react-redux';

const CategoryPreview = ({title, products}) => {
    const isLoading = useSelector(selectCategoriesLoading);

    return (  
        <CategoryPreviewContainer>
           {isLoading ? <Spinner /> :
            <>
            <Link to={title} className="titlePreview">{title.toUpperCase()}</Link>
            <Preview>
                {
                    products.filter((_, idx) => (idx < 4)).map((product) => <ProductCard product={product}/>)
                }
            </Preview>
            </>
            
            }

        </CategoryPreviewContainer>
    );
}
 
export default CategoryPreview;