import { ShopComponent } from './shop.styles';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import{ getCategoriesAndDocuemnts }from '../../utils/firebase.utils.js';
//import {setCategories} from '../../store/categories/category.action.js';
import { fetchCategoriesAsync } from '../../store/categories/category.action.js';
import {useDispatch} from 'react-redux'

const Shop = () => {
    const dispatch = useDispatch();
    useEffect(() => {
          // const categoriesArray = await getCategoriesAndDocuemnts();
           dispatch(fetchCategoriesAsync())
    }, [dispatch]);
    return ( 
     <ShopComponent>
      <Outlet />
     </ShopComponent>
     );
}
 
export default Shop;