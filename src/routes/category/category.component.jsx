import { useParams } from 'react-router-dom';
import {useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../../components/product-card/product-card.component';
import { SingleCategory, SingleCategoryContainer } from './category.styles';
import { selectCategoriesLoading, selectCategoriesMap } from '../../store/categories/category.selector';
import Spinner from '../../components/spinner/spinner.component';

const Category = () => {
    const {category} = useParams();
    const categories = useSelector(selectCategoriesMap);
    const [products, setProducts] = useState(categories[category]);
    const isLoading = useSelector(selectCategoriesLoading)

    useEffect(() => {
        setProducts(categories[category]);
    },[categories, category]);

    return ( 
        <>
        <SingleCategoryContainer>
        <h2>{category.toUpperCase()}</h2>
        {isLoading ? <Spinner /> : 
        <SingleCategory >
            {
               products && products.map((product) => <ProductCard product={product} />)
            }
        </SingleCategory >}
        </SingleCategoryContainer>
        </>
     );
}
 
export default Category;