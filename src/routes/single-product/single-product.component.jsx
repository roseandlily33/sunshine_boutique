import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.actions.js';
import { selectCartItems } from '../../store/cart/cart.selector.js';

const SingleProduct = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    //const addProductToCart = () => dispatch(addItemToCart(cartItems, product));
    const {id} = useParams();
    return (
        <>
        <h2>Product Page {id}</h2>
        </>
      );
}
 
export default SingleProduct;