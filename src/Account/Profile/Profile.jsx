import React from 'react'
import './Profile.css'
import AccountNav from '../AccountNav'
import './Profile.css'
import useProfile from '../../hook/useProfile'
import AccountBack from '../AccountBack'


const Profile = () => {

    const { profile, setProfile, updateProfile} = useProfile()

  return  (
    <div className='account_main_wrapper'>

        <AccountBack url={'/account'} text={'My Profile'} />

        <div className='account_nav_wrapper'>
            <AccountNav profile={profile}/>
        </div>

        <div className='profile_main_wrapper'>
            <form className='profile_form'>
                <p>Name</p>
                <input type="text" value={profile?.Name} onChange={(e)=>setProfile({...profile,Name: e.target.value})} />
                <p>Address</p>
                <input type="text" value={profile?.Address} onChange={(e)=>setProfile({...profile,Address: e.target.value})} />
                <p>Email</p>
                <input type="text" value={profile?.EmailID} onChange={(e)=>setProfile({...profile,EmailID: e.target.value})} />
                <p>Mobile Number</p>
                <input type="text" value={profile?.PhoneNumber} onChange={(e)=>setProfile({...profile,PhoneNumber: e.target.value})} />
                <button type='submit' onClick={(e)=>updateProfile(e)}>UPDATE ACCOUNT</button>

            </form>

        </div>

    </div>
        
          )
}

export default Profile