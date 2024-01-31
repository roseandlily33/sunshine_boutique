import { ButtonContainer, ProductContainer } from './product-card.styles.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.actions.js';
import { selectCartItems } from '../../store/cart/cart.selector.js';

const ProductCard = ({product}) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

    return (
                  <ProductContainer key={product.id}>
                    <img src={product.imageUrl} alt={product.name}/>
                   <ButtonContainer>
                   <div>
                    <h3>{product.name}</h3>
                    <h4>${product.price}</h4>
                    </div>
                    <div>
                    <button onClick={addProductToCart}>Add to Cart</button>
                    </div>
                   </ButtonContainer>
                </ProductContainer>
   
     );
}
 
export default ProductCard;