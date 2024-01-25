import { createAction } from '../../utils/reducer.utils';
import CATEGORIES_ACTION_TYPE from './category.types';
import { getCategoriesAndDocuemnts } from '../../utils/firebase.utils';

export const setCategories = (categoriesArray) => createAction(CATEGORIES_ACTION_TYPE.SET_CATEGORIES, categoriesArray);

export const fetchCategoriesStart = () => createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categoriesArray) => createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS, categoriesArray);

export const fetchCategoriesFailure = (error) => 
createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILED, error);

export const fetchCategoriesAsync = () => async(dispatch) => {
    dispatch(fetchCategoriesStart())
    try{
        const categoriesArray = await getCategoriesAndDocuemnts('categories');
        dispatch(fetchCategoriesSuccess(categoriesArray));
    } catch(err){
        dispatch(fetchCategoriesFailure(err))
    }
}