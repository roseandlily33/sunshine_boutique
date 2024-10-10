import {Routes, Route} from 'react-router-dom';
import Navbar from './routes/navbar/navbar.component';
import Home from "./routes/home/home.component";
import SignIn from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';
import CategoriesPreview from './routes/categories-preview/categories-preview.component';
import Category from './routes/category/category.component';
import { ThemeProvider } from 'styled-components';
import Footer from './routes/footer/footer.component';
import Contact from './routes/contact/contact.component';
import { useEffect } from 'react';
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "./utils/firebase.utils";
import { setCurrentUser } from './store/user/user.action';
import { useDispatch } from 'react-redux';

const theme = {
  color: {
    black: '#1f2020',
    darkGrey: '#779494',
    mediumGrey: '#8EA7A7',
    lightGrey: '#98AFAF',
    white: '#ffffff',
    teal: '#014D4E',
    mediumTeal: '#185D5E',
    lightTeal: '#2D6C6D',
    yellow:' #f5ba45',
    mediumYellow: '#F6C056',
    lightYellow: '#F7C665'
  },
  border: {
    borderRadius: '4px',
  }
};

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe =  onAuthStateChangedListener((user) => {
         if(user){
            createUserDocumentFromAuth(user);
         }
         dispatch(setCurrentUser(user));
     })
     return unsubscribe;
 }, [dispatch])


  return (
    <ThemeProvider theme={theme}>
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/shop' element={<Shop />}>
          <Route index element={<CategoriesPreview />} />
          <Route path=':category' element={<Category />} />
        </Route>
        <Route path='/signin' element={<SignIn />}/>
        <Route path='/checkout' element={<Checkout />} />
      </Route>
    </Routes>
    <Footer />
    </ThemeProvider>
  );
}

export default App;