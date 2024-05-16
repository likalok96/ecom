import React, { useContext, useEffect, useState } from 'react'
import './AccountNav.css'
import {AiOutlineMail} from 'react-icons/ai'
import {GoSignOut} from 'react-icons/go'
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const AccountNav = ({profile}) => {
  const {setExp} = useContext(ShopContext);
  const navigate = useNavigate()

  const [loading , setLoading] = useState(false)
  useEffect(()=>{
      setTimeout(() => {
          setLoading(true)
      }, 500);

  },[])

  const logout = (e) =>{
    e.preventDefault();
    localStorage.setItem("access-token", '')
    localStorage.setItem("refresh-token", '')
    localStorage.setItem("refresh-token-exp", '')
    setExp(false)
    navigate("/account/login");
  }

  return (profile&&loading) ? (
  <div className='account_nav'>
    <div className='account_info'>
      <p>{profile.Name}</p>
      <div className='account_info_email'>
        <AiOutlineMail/> <span>{profile.EmailID}</span>
      </div>
    </div>
    <div className='account_nav_opt'>
      <a href="/account/order">Order Records</a>
      <a href="/account/profile">My Profile</a>
      <a href="">Shipping Address</a>

      <a href="/account/password">Reset Password</a>
      <a href="" className='signout' onClick={(e)=>logout(e)}>Sign Out<GoSignOut/></a>
    </div>
  </div>
  ) : (  
  <div className='account_nav'>
    <div className='account_info'>
      <p><Skeleton height={24} /></p>
      <div className='account_info_email'>
        <AiOutlineMail/> <span><Skeleton height={12} width={100} /></span>
      </div>
    </div>
    <div className='account_nav_opt'>
      <a href="/account/order">Order Records</a>
      <a href="/account/profile">My Profile</a>
      <a href="">Shipping Address</a>

      <a href="/account/password">Reset Password</a>
      <a href="" className='signout' onClick={(e)=>logout(e)}>Sign Out<GoSignOut/></a>
    </div>
  </div>
)
}

export default AccountNav