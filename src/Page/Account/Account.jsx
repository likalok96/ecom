import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './Account.css'
import AccountNav from './AccountNav';
import useProfile from '../../hook/useProfile';
import { AuthContext } from '../../Context/AuthContext';


const Account = () => {

    const navigate = useNavigate();

    //const {profile} = useProfile()
    const {authProfile} = useContext(AuthContext)

    useEffect( ()=>{

      const token = {token: localStorage.getItem('access-token') || ''}
      if (!localStorage.getItem('access-token')||token.token==='') {navigate("/account/login")}

    }

    ,[navigate])

  return (
    <div className='account_outter_wrapper'>
      <div className='account_main_wrapper'>
        { <AccountNav profile={authProfile}/>}

      </div>
    </div>
  )
}


export default Account