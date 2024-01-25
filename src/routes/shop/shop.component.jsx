import { ShopComponent } from './shop.styles';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import{ getCategoriesAndDocuemnts }from '../../utils/firebase.utils.js';
import {setCategories} from '../../store/categories/category.action.js';
import {useDispatch} from 'react-redux'

const Shop = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const getCategories = async() => {
           const categoriesArray = await getCategoriesAndDocuemnts();
           console.log("CAT ARRAY", categoriesArray)
           dispatch(setCategories(categoriesArray))
        }
        getCategories();
        
    }, [dispatch]);
    return ( 
     <ShopComponent>
      <Outlet />
     </ShopComponent>
     );
}
 
export default Shop;