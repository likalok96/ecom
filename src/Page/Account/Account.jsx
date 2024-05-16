import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './Account.css'
import AccountNav from './AccountNav';
import useProfile from '../../hook/useProfile';


const Account = () => {

    const navigate = useNavigate();

    const {profile} = useProfile()

    useEffect( ()=>{

      const token = {token: localStorage.getItem('access-token') || ''}
      if (!localStorage.getItem('access-token')||token.token==='') {navigate("/account/login")}

    }

    ,[navigate])

  return (
    <div className='account_outter_wrapper'>
      <div className='account_main_wrapper'>
        { <AccountNav profile={profile}/>}

      </div>
    </div>
  )
}


export default Account