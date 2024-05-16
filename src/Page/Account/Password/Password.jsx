import React from 'react'
import './Password.css'
import AccountNav from '../AccountNav';
import useProfile from '../../../hook/useProfile';
import AccountBack from '../AccountBack';

const Password = () => {

    const {profile, confirm, setProfile, setConfirm, updatePassword} = useProfile()

  return (
    <div className='account_main_wrapper'>

        <AccountBack url={'/account'} text={'Reset Password'} />
        
        <div className='account_nav_wrapper'>
            <AccountNav profile={profile}/>
        </div>
        <div className='profile_main_wrapper'>
            <form className='profile_form'>
                <p>New Password</p>
                <input type="password"  onChange={(e)=>setProfile({...profile,Password: e.target.value})} required  />
                {(profile?.Password?.length>5 || !profile)?<div></div>:<p>Password should have more than 6 charaters.</p>}
                <p>Confirm New Password</p>
                <input type="password"  onChange={(e)=>setConfirm(e.target.value)} required />
                {(profile?.Password===confirm || confirm.length===0)?<div></div>:<p>Confirm password is not the same as password.</p>}

                <button type='submit' disabled={profile?.Password!==confirm || confirm.length<6} onClick={(e)=>updatePassword(e)}>UPDATE ACCOUNT</button>
            </form>

        </div>

    </div>
        
          )
}

export default Password