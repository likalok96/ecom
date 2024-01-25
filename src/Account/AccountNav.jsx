import React, { useContext, useEffect, useState } from 'react'
import './AccountNav.css'
import {AiOutlineMail} from 'react-icons/ai'
import {GoSignOut} from 'react-icons/go'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useProfile from '../hook/useProfile';
import { ShopContext } from '../Context/ShopContext';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const AccountNav = ({profile}) => {
  const {getQuantity,exp,setExp} = useContext(ShopContext);


  //const {profile} = useProfile()
  const navigate = useNavigate()

  const [loading , setLoading] = useState(false)
  useEffect(()=>{
      setTimeout(() => {
          setLoading(true)
      }, 1000);

  },[])

  const logout = (e) =>{
    e.preventDefault();
    localStorage.setItem("access-token", '')
    localStorage.setItem("refresh-token", '')
    localStorage.setItem("refresh-token-exp", '')
    setExp(false)
    navigate("/account/login");
  }

  /*
    const [profile, setProfile] = useState([]);


    useEffect(()=>{
      const token = {token: localStorage.getItem('access-token') || ''}
        axios.post(process.env.REACT_APP_API_URL + "/account/profile",token)
        .then((res)=>{
          setProfile(res.data[0])
        })
    },[])

    const logout = (e)=> {
      e.preventDefault();
      localStorage.setItem("access-token", '')
      axios.get(process.env.REACT_APP_API_URL + "/account/logout")
      .then((res)=>{
        if (res.data.Status === "Success"){
          navigate("/account/login")
      } else {
          alert("error")
        }
      }).catch((err)=> console.log(err))
    }
*/

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