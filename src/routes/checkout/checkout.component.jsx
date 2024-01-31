import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../../store/cart/cart.selector";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { TotalContainer, CheckoutContainer, BottomDiv } from "./checkout.styles";
import PaymentForm from "../../components/payment-form/payment-form.component";

const Checkout = () => {
   const cartItems = useSelector(selectCartItems);
   const cartTotal = useSelector(selectCartTotal);
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
           <BottomDiv>
           <TotalContainer>Total: ${cartTotal}</TotalContainer>
           <PaymentForm />
           </BottomDiv>
          
        </CheckoutContainer>
        </>
     );
}
 
export default Checkout;