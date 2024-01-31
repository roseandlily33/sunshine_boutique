import CartItem from '../cart-item/cart-item.component';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CartItems, CartDropdownContainer } from './cart-dropdown.styles';
import { selectCartItems } from '../../store/cart/cart.selector';

const CartDropdown = () => {
   const cartItems = useSelector(selectCartItems);
    const navigate = useNavigate();
    const goToCheckout = () => {
        navigate('/checkout')
    }

    return (  
        <CartDropdownContainer>
            {cartItems.length ? 
             <CartItems>
             {cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem}/>)}
             <button onClick={goToCheckout}>Checkout</button>
            </CartItems> : 
            <h3>Your cart is empty!</h3>
        }
           
        </CartDropdownContainer>
    );
}
 
export default CartDropdown;