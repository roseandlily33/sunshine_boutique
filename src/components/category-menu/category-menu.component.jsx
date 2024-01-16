import { categories } from "./categories";
import CategoryItem from "../category-item/category-item.component";
import { MenuContainer, MainMenuContainer } from "./category-menu.styles";


const CategoryMenu = () => {
    return ( 
      <MainMenuContainer>
      <h2>Shop our favourites</h2>
        < MenuContainer>
        
        {categories.map((category) => (
          <CategoryItem category={category}/>
        ))}
      </ MenuContainer>
      </MainMenuContainer>
    );
}
 
export default CategoryMenu;