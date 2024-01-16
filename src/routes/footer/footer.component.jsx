import { FooterContainer, BottomFooter } from "./footer.styles";
import { Link } from "react-router-dom";
const Footer = () => {

    return ( 
        <FooterContainer>
            <h1><Link to='/'>Rose + Lily</Link></h1>
            <BottomFooter>
            <Link to='/shop'>Shop</Link>
            <Link to='/contact'>Contact Us</Link>
            <Link to='/signin'>Sign In</Link>
            </BottomFooter>
            
        </FooterContainer>

     );
}
 
export default Footer;