// import { useContext } from "react";
// import { CartContext } from "../../contexts/cart.context";
import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../../store/cart/cart.selector";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { TotalContainer, CheckoutContainer } from "./checkout.styles";

const Checkout = () => {
   // const {cartItems, addItemToCart, decrementItemFromCart, clearCartItem, cartTotal} = useContext(CartContext);
   const cartItems = useSelector(selectCartItems);
   const cartTotal = useSelector(selectCartTotal);
   console.log('CART TOTAL', cartTotal);
    return ( 
      <>
        <CheckoutContainer>
        
         <table className='checkout-table'>
            <thead>
                <th></th>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
                <th></th>
            </thead> 
            </table>
         
        
           {cartItems.map((cartItem) => (
            <CheckoutItem cartItem={cartItem}/>
           ))}
           <TotalContainer>Total: ${cartTotal}</TotalContainer>
        </CheckoutContainer>
        </>
     );
}
 
export default Checkout;