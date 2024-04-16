import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useNavigate } from 'react-router-dom';
import './Account.css'
import AccountNav from './AccountNav';
import useProfile from '../hook/useProfile';


const Account = () => {

    const navigate = useNavigate();

    const {profile} = useProfile()

    useEffect( ()=>{

      const token = {token: localStorage.getItem('access-token') || ''}
      if (!localStorage.getItem('access-token')||token.token==='') {navigate("/account/login")}

    }

    ,[])

  return (
    <div className='account_outter_wrapper'>
      <div className='account_main_wrapper'>
        { <AccountNav profile={profile}/>}

      </div>
    </div>
  )
}


export default Account