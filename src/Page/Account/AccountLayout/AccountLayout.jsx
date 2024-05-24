import React, { useContext } from 'react'
import AccountBack from '../AccountBack'
import AccountNav from '../AccountNav'
import { AuthContext } from '../../../Context/AuthContext'
import { Outlet } from 'react-router-dom'

const AccountLayout = () => {

    const {authProfile} = useContext(AuthContext)

    return (

        <div className='account_main_wrapper'>

            <AccountBack url={'/account'} text={'Order Record'}/>
    
            <div className='account_nav_wrapper'>
                <AccountNav profile={authProfile}/>
            </div>

            <Outlet/>
    
        </div>
      )
}

export default AccountLayout