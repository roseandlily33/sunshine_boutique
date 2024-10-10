import { ButtonContainer, ProductContainer } from './product-card.styles.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.actions.js';
import { selectCartItems } from '../../store/cart/cart.selector.js';
import { Link } from 'react-router-dom';

const ProductCard = ({product}) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const productLink = `/product/${product.id}`;
  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

    return (
                  <ProductContainer key={product.id}>
                    <Link to={productLink}><img src={product.imageUrl} alt={product.name}/></Link>
                  </ProductContainer>
     );
}
 
export default ProductCard;