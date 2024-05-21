import React, { useState } from 'react'

import Dropdown from '../Header/Dropdown/Dropdown';
import StickyNav from './StickyNav/StickyNav';
import MainMune from '../Component/MainMune/MainMune';
//{showMenu, setShowMenu, show, setShow,showSearch, setShowSearch}
const Header = () => {

  const [show, setShow] = useState('');
    const [showMenu, setShowMenu] = useState(false)
    const [showSearch, setShowSearch] = useState(false)
  return (
    <>
        <StickyNav setShow={setShow} show={show} showMenu={showMenu} setShowMenu={setShowMenu} setShowSearch={setShowSearch} showSearch={showSearch}/>
        {showMenu ? 
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
    </>
  )
}

export default Header