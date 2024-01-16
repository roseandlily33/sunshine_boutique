import CategoryMenu from "../../components/category-menu/category-menu.component";
import storeFront from '../../images/storefront.jpg';
import { MainContainer, HeroContainer } from './home.styles';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <MainContainer>
        <div>
        <img id="heroImage" src={storeFront} alt="Heading Store Front" />
         <HeroContainer>
          <h2>Welcome to Rose & Lily</h2>
          <Link to='/shop'>Shop Now</Link>
         </HeroContainer>
        </div>
        <CategoryMenu />
        </MainContainer>
      );
}
 
export default Home;