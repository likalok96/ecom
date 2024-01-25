import React,{useEffect, useState} from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import App from '../App';
import Cart from '../Main/Cart/Cart';
import ShopContextProvider from '../Context/ShopContext'
import TopNav from '../Header/TopNav/TopNav';
import MainNav from '../Header/MainNav/MainNav';
import Dropdown from '../Header/Dropdown/Dropdown';
import MenuCart from '../Header/MenuCart/MenuCart';
import Account from '../Account/Account';
import Login from '../Account/Login/Login';
import Order from '../Account/Order/Order';
import OrderDetail from '../Account/Order/OrderDetail';
import Profile from '../Account/Profile/Profile';
import Checkout from '../Checkout/Checkout';
import Success from '../Checkout/Success';
import Password from '../Account/Password/Password';
import Signup from '../Account/Signup/Signup';
import Product from '../Main/Product/Product';
import ProductDetails from '../Main/Product/ProductDetails';
import Discount from '../Footer/Discount';
import Contact from '../Footer/Contact';
import MainMune from '../Component/MainMune';
import Brand from '../Main/Brand/Brand';
import Review from '../Review/Review';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const google_client_id = '1087005348930-mljeqbal7qquh9kssbof6hvmeb9nagnt.apps.googleusercontent.com'


const Router = () => {
    const [show, setShow] = useState('');
    const [showMenu, setShowMenu] = useState(false)



console.log('route')
  return (
    
      
    <GoogleOAuthProvider clientId={google_client_id}>
    <ShopContextProvider>
        <BrowserRouter>
        <div className='sticky_nav'>
            <TopNav />
            <MainNav setShow={setShow} show={show} showMenu={showMenu} setShowMenu={setShowMenu} />
        </div>
        {showMenu ? 
        <div className='sticky_dropdown'>
          <MainMune setShow={setShow} show={show}/>
        </div>
        :
        <div className='sticky_dropdown'>
          <li key='First Group'><Dropdown  text='First Group' show={show} setShow={setShow}/></li>
          <li key='Second Group'><Dropdown text='Second Group' show={show} setShow={setShow}/></li>
          <li key='Third Group'><Dropdown text='Third Group' show={show} setShow={setShow}/></li>
          <li key='Shop by Brand'><Dropdown text='Shop by Brand' show={show} setShow={setShow}/></li>
          
      </div>}
            <Routes>
                    <Route path='/' element={<App />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/cartmenu' element={<MenuCart />} />
                    <Route path='/account/signup' element={<Signup />} />
                    <Route path='/account/login' element={<Login />} />
                    <Route path='/account' element={<Account />} />
                    <Route path='/account/order' element={<Order />} />
                    <Route path='/account/order/:order_id' element={<OrderDetail />} />
                    <Route path='/account/profile' element={<Profile />} />
                    <Route path='/account/password' element={<Password />} />
                    <Route path='/checkout' element={<Checkout />} />
                    <Route path='/success/:session_id' element={<Success />} />
                    <Route path='/collection' element={<Product />} />
                    <Route path='/collection/:category' element={<Product />} />
                    <Route path='/collection/:category/:brand' element={<Product />} />
                    <Route path='/collection/brand/:brand' element={<Product />} />
                    <Route path='/brand' element={<Brand />} />

                    


                    <Route path='/product/:brand/:product' element={<ProductDetails />} />

                    <Route path='/review' element={<Review product_id={0} product={false}/>} />

            </Routes>

            
            <Discount />
            <Contact />

        </BrowserRouter >
    </ShopContextProvider>
    </GoogleOAuthProvider>
    

    
      )
}
//<Route path='product' element={<Product />} />

export default Router