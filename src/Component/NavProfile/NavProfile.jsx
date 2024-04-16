import React, { useContext, useEffect, useState } from 'react'
import {AiOutlineShoppingCart, AiOutlineHeart} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import './NavProfile.css'
import { ShopContext } from '../../Context/ShopContext'

const NavProfile = ({quantity, exp}) => {

    const {wishItems} = useContext(ShopContext)

  return (
    <div className='nav_icon'>
        <div className='personal'>
            <a href="/wishlist">
                <AiOutlineHeart/>
            </a>
            <p className='cart_count'>{Object.keys(wishItems).length}</p>
            <a  href={(exp||window.location.pathname==='/account')?"/account":"/account/login"} className='middle_icon' ><CgProfile/></a>
            <a href="/cart">
                <AiOutlineShoppingCart/>
            </a>
            <p className='cart_count'>{quantity}</p>
        </div>

        {<div className='order'>
            <a href="/account/order">Re-Order</a>

        </div>}
    </div>
  )
}

export default NavProfile