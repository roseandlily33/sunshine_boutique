import { Link, NavLink, Outlet } from "react-router-dom";
import {signOutUser} from '../../utils/firebase.utils.js';
import CartIcon from "../../components/cart-icon/cart-icon.component.jsx";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component.jsx";
import { NavBarContainer,  NavbarMiddleContainer, NavLinksContainer } from "./navbar.styles.jsx";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector.js";
import { selectIsCartOpen } from "../../store/cart/cart.selector.js";
const Navbar = () => {
  const currentUser = useSelector(selectCurrentUser)
 //const {currentUser } = useContext(UserContext);
  //const {isCartOpen} = useContext(CartContext);
  const isCartOpen = useSelector(selectIsCartOpen)

  console.log('The current User', currentUser);
    return(
     <>
     <NavBarContainer>
     <NavLinksContainer >
        <NavLink to='/contact'>CONTACT</NavLink>
        <NavLink to='/shop'>SHOP</NavLink>
        </NavLinksContainer >
      < NavbarMiddleContainer>
      <Link to='/'><h1>Rose + Lily</h1></Link>
      </NavbarMiddleContainer>
       <NavLinksContainer >
        {
          currentUser ? <NavLink to='/' onClick={signOutUser}>SIGN OUT</NavLink> : <NavLink to='/signin'>SIGN IN</NavLink>
        }
        <h2><CartIcon /></h2>
       </NavLinksContainer >
      {isCartOpen && <CartDropdown /> }
      </NavBarContainer>
     <Outlet />
     </>
    )
   }
export default Navbar;