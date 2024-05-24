import React,{ useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import App from '../Page/App/App';
import Cart from '../Page/Cart/Cart';
import ShopContextProvider from '../Context/ShopContext'

import MenuCart from '../Header/MenuCart/MenuCart';
import Account from '../Page/Account/Account';
import Login from '../Page/Account/Login/Login';
import Order from '../Page/Account/Order/Order';
import OrderDetail from '../Page/Account/Order/OrderDetail';
import Profile from '../Page/Account/Profile/Profile';
import Checkout from '../Page/Checkout/Checkout';
import Success from '../Page/Success/Success';
import Password from '../Page/Account/Password/Password';
import Product from '../Page/Product/Product';
import ProductDetails from '../Page/ProductDetails/ProductDetails';

import Brand from '../Page/Brand/Brand';
import Review from '../Page/Review/Review';
import { GoogleOAuthProvider } from '@react-oauth/google';

import About from '../Page/About/About';
import Wishlist from '../Page/Wishlist/Wishlist';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import AuthContextProvider from '../Context/AuthContext';
import AccountLayout from '../Page/Account/AccountLayout/AccountLayout';


const google_client_id = '1087005348930-mljeqbal7qquh9kssbof6hvmeb9nagnt.apps.googleusercontent.com'


const Router = () => {


/*     const [show, setShow] = useState('');
    const [showMenu, setShowMenu] = useState(false)
    const [showSearch, setShowSearch] = useState(false)

    const showContent = ((!showMenu) && (!showSearch || ( ( window.innerWidth > 800 ) && ( window.innerHeight > 600 )))) */
//setShow={setShow} show={show} setShowSearch={setShowSearch} showSearch={showSearch} showMenu={showMenu} setShowMenu={setShowMenu} 
console.log('route')
  return (
    
      
    <GoogleOAuthProvider clientId={google_client_id}>
    <ShopContextProvider >

        <BrowserRouter>
        <AuthContextProvider>
          <Header />

            { <Routes>
                    <Route path='/' element={<App />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/wishlist' element={<Wishlist />} />
                    <Route path='/cartmenu' element={<MenuCart />} />

                    <Route path='/account/login' element={<Login />} />
                    <Route path='/account' element={<AccountLayout/>}>
                        <Route path=''  />
                        <Route path='order' element={<Order />} />
                        <Route path='order/:order_id' element={<OrderDetail />} />
                        <Route path='profile' element={<Profile />} />
                        <Route path='password' element={<Password />} />
                      
                    </Route>
                  

                    <Route path='/checkout' element={<Checkout />} />
                    <Route path='/success/:session_id' element={<Success />} />
                    
                    <Route path='/collection' element={<Product />} />
                    <Route path='/collection/:category' element={<Product />} />
                    <Route path='/collection/:category/:brand' element={<Product />} />
                    <Route path='/collection/brand/:brand' element={<Product />} />
                    <Route path='/brand' element={<Brand />} />

                    <Route path='/product/:brand/:product' element={<ProductDetails />} />

                    <Route path='/review' element={<Review product_id={0} product={false}/>} />
                    <Route path='/about' element={<About />} />


            </Routes>}

            {<Footer/>}
            </AuthContextProvider>
        </BrowserRouter >
        
    </ShopContextProvider>
    
    </GoogleOAuthProvider>
    

    
      )
}

export default Router