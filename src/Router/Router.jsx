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
import MainMune from '../Component/MainMune/MainMune';
import Brand from '../Main/Brand/Brand';
import Review from '../Review/Review';
import { GoogleOAuthProvider } from '@react-oauth/google';
import SearchNav from '../Component/SearchNav/SearchNav';
import StickyNav from '../Header/StickyNav/StickyNav';
import SearchResult from '../Component/SearchResult/SearchResult';
import About from '../Footer/About/About';
import Wishlist from '../Main/Wishlist/Wishlist';


const google_client_id = '1087005348930-mljeqbal7qquh9kssbof6hvmeb9nagnt.apps.googleusercontent.com'


const Router = () => {


    const [show, setShow] = useState('');
    const [showMenu, setShowMenu] = useState(false)
    const [showSearch, setShowSearch] = useState(false)

    const showContent = (!showMenu && !showSearch || ( ( window.innerWidth > 800 ) && ( window.innerHeight > 600 )))
/*
    const meadiaQuery = window.matchMedia("(max-width: 1000px)");
    const [showNav, setShowNav] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(window.scrollY);
    const [windowSize, setWindowSize] = useState(meadiaQuery.matches);

    const navCheck = ()=>{
        if (window.scrollY > lastScrollY && windowSize && window.scrollY>200) { 
          setShowNav(false); 
  
        } else { 
  
          setShowNav(true);  
        }
    
        setLastScrollY(window.scrollY); 
      }

    useEffect(()=>{
        window.matchMedia("(max-width: 1000px)").addEventListener('change', (e)=>setWindowSize(e.matches));
        return ()=>{
            window.matchMedia("(max-width: 1000px)").removeEventListener('change', (e)=>setWindowSize(e.matches));
        }
    },[])

    useEffect(()=>{

      
      window.addEventListener('scroll', navCheck);
      

      return () =>{
        //window.matchMedia("(max-width: 1000px)").removeEventListener('change', (e)=>setWindowSize(e.matches));
        window.removeEventListener('scroll', navCheck);
      }

    },[lastScrollY])
*/

console.log('route')
  return (
    
      
    <GoogleOAuthProvider clientId={google_client_id}>
    <ShopContextProvider >
        <BrowserRouter>
        {/*<div className={showNav ? 'sticky_nav' : 'sticky_nav sticky_nav_hide'}>
            <TopNav />
            <MainNav setShow={setShow} show={show} showMenu={showMenu} setShowMenu={setShowMenu} showNav={showNav}/>
            {/*<div className='mainNav_wrapper'>
            
              <SearchNav setShow={setShow}/>
            
            </div>
            
        </div>*/}
        <StickyNav setShow={setShow} show={show} showMenu={showMenu} setShowMenu={setShowMenu} setShowSearch={setShowSearch} showSearch={showSearch}/>
{/*         <SearchResult setShowSearch={setShowSearch} showSearch={showSearch}/>
 */}        {showMenu ? 
        <div className='sticky_dropdown'>
          <MainMune setShow={setShow} show={show}/>
        </div>
        :
        <div className='sticky_dropdown'>
          <li key='First Group'><Dropdown  text='First Group' show={show} setShow={setShow}/></li>
          <li key='Second Group'><Dropdown text='Second Group' show={show} setShow={setShow}/></li>
          <li key='Third Group'><Dropdown text='Third Group' show={show} setShow={setShow}/></li>
          {<li key='Shop by Brand'><Dropdown text='Shop by Brand' show={show} setShow={setShow}/></li>}
          
      </div>}
            {(showContent) && <Routes>
                    <Route path='/' element={<App />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/wishlist' element={<Wishlist />} />
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
                    <Route path='/about' element={<About />} />


            </Routes>}

            
            {showContent && <Discount />}
            {showContent && <Contact />}

        </BrowserRouter >
    </ShopContextProvider>
    </GoogleOAuthProvider>
    

    
      )
}

export default Router