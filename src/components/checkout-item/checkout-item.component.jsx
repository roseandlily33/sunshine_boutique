import './checkout-item.styles.scss';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart, clearItemFromCart, removeItemFromCart } from '../../store/cart/cart.actions';

const CheckoutItem = ({cartItem}) => {
    const dispatch = useDispatch();
    const allItems = useSelector(selectCartItems);
    const clearItemHandler = () => dispatch(clearItemFromCart(allItems, cartItem));
    const addItemHandler = () => dispatch(addItemToCart(allItems, cartItem));
    const removeItemHandler = () => dispatch(removeItemFromCart(allItems, cartItem));

    return ( 
        <>
                <tbody className="checkout-container">
                    <td><img src={cartItem.imageUrl} alt={cartItem.name} /></td>
                    <td>{cartItem.name}</td>
                    <td className="quantity-div">
                    <div className="iconQuantity" onClick={removeItemHandler}>⬸</div>
                    <h3>{cartItem.quantity}</h3>
                    <div className="iconQuantity" onClick={addItemHandler}>⤑</div>
                    </td>
                    <td>{cartItem.price}</td>
                    <td className="iconQuantity" onClick={clearItemHandler}>X</td>
               </tbody>
        </>
     );
}
 
export default CheckoutItem;