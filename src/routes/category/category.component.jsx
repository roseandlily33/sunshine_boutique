import { useParams } from 'react-router-dom';
import {useState, useEffect } from 'react';

import ProductCard from '../../components/product-card/product-card.component';
import { SingleCategory, SingleCategoryContainer } from './category.styles';
import { selectCategoriesMap } from '../../store/categories/category.selector';
import { useSelector } from 'react-redux';


const Category = () => {
    const {category} = useParams();
    const categories = useSelector(selectCategoriesMap);
    const [products, setProducts] = useState(categories[category]);
    // console.log('Category useParams', category);
    // console.log('Categories useContext', categories);
    // console.log('Products useState', products)
    //console.log('Render/Rerendering category component')

    useEffect(() => {
      //  console.log('Effect Fired Category Component to set products')
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