import React, { useEffect, useState } from 'react'
import {AiOutlineShoppingCart, AiOutlineHeart} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'


const NavProfile = ({quantity, exp}) => {


    //const {profile} = useProfile()
    const [exp1, setExp] = useState();

    const exp_time = localStorage.getItem('refresh-token-exp')
    
    console.log(window.location.pathname)
    useEffect(()=>{
        setExp(exp)
        console.log('hello')
    },[localStorage.getItem('refresh-token-exp')])

  return (
    <div className='nav_icon'>
        <div className='personal'>
            <a href="">
                <AiOutlineHeart/>
            </a>
            <p className='cart_count'>1</p>
            <a  href={(exp||window.location.pathname==='/account')?"/account":"/account/login"} className='middle_icon' ><CgProfile/></a>
            <a href="/cart">
                <AiOutlineShoppingCart/>
            </a>
            <p className='cart_count'>{quantity}</p>
        </div>

        <div className='order'>
            <a href="/account/order">Re-Order</a>

        </div>
    </div>
  )
}

export default NavProfile