import logo from './logo.svg';
import './App.css';
import TopNav from './Header/TopNav/TopNav';
import MainNav from './Header/MainNav/MainNav';
import { useState,useContext, useEffect } from 'react';

import Dropdown from './Header/Dropdown/Dropdown';
import Banner from './Main/Banner/Banner';
import ProductSwiper from './Main/ProductSwiper/ProductSwiper'

import ShopContextProvider from './Context/ShopContext'
import {ShopContext} from './Context/ShopContext'

import { useNavigate } from "react-router-dom";

import Cart from './Main/Cart/Cart';
import ReviewSwiper from './Review/ReviewSwiper';

function App() {
  const [show, setShow] = useState('');

  
  console.log(show)
  const {cartItems, addToCart, getQuantity} = useContext(ShopContext);

  const navigate = useNavigate();


  return (
    <div>
      





      <div className='main_content'>
            <Banner  />
            <li key='Food'><ProductSwiper opt={true} category={'Food'} title='Food' /></li>
            <li key='Health'><ProductSwiper opt={true} category={'Health'}  title='Health' /></li>
            <li key='Electronics'><ProductSwiper opt={true} category={'Electronics'}  title='Electronics' /></li>

            <ReviewSwiper/>
            
      </div>


    </div>
  )
}

/*
      <div className='sticky_nav'>
          <TopNav />
          <MainNav setShow={setShow} />
      </div>

      <div className='sticky_dropdown'>
          <Dropdown text='Dogs' show={show} setShow={setShow}/>
          <Dropdown text='Cats' show={show} setShow={setShow}/>
          <Dropdown text='Small Animals' show={show} setShow={setShow}/>
          <Dropdown text='Shop by Brand' show={show} setShow={setShow}/>
      </div>
*/

export default App;
