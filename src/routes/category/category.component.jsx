
import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../components/product-card/product-card.component';
import { SingleCategory, SingleCategoryContainer } from './category.styles';

const Category = () => {
    const {category} = useParams();
    const {categories} = useContext(CategoriesContext);
    const [products, setProducts] = useState(categories[category]);


    useEffect(() => {
        setProducts(categories[category]);
    },[categories, category]);

    return ( 
        <>
        <SingleCategoryContainer>
        <h2>{category.toUpperCase()}</h2>
        <SingleCategory >
            {
               products && products.map((product) => <ProductCard product={product} />)
            }
        </SingleCategory >
        </SingleCategoryContainer>
        </>
     );
}
 
export default Category;