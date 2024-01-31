import './cart-icon.styles.jsx';
import {ReactComponent as ShoppingIcon} from '../../images/shopping-bag.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector.js';
import { setIsCartOpenAction } from '../../store/cart/cart.actions.js';
import { ItemCount } from './cart-icon.styles.jsx';

const CartIcon = () => {
   const dispatch = useDispatch();
   const cartCount  = useSelector(selectCartCount);
   const isCartOpen = useSelector(selectIsCartOpen);

    const toggleIsCartOpen = () => dispatch(setIsCartOpenAction(!isCartOpen));

    return (
        <div onClick={toggleIsCartOpen}>
             <ShoppingIcon className="icon" />
             <ItemCount>{cartCount}</ItemCount>
        </div>
      );
}
 
export default CartIcon;