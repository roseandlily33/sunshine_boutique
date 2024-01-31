import { CartItemContainer, ItemDetails } from "./cart-item.styles";

const CartItem = ({cartItem}) => {
    const {id, name, imageUrl, price, quantity} = cartItem;
    return (
        <CartItemContainer key={id}>
           <img src={imageUrl} alt={name} />
            <ItemDetails>
            <h2>{name}</h2>
            <h4>{quantity} x</h4>
            <h4>${price}</h4>
            </ItemDetails>
           
        </CartItemContainer>
      );
}
 
export default CartItem;