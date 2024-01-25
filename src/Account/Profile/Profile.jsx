import React, {useState, useEffect, useContext} from 'react'
import './Profile.css'
import AccountNav from '../AccountNav'
import axios from 'axios'
import './Profile.css'
import useProfile from '../../hook/useProfile'
import AccountBack from '../AccountBack'
import { ShopContext } from '../../Context/ShopContext'
import { useLocation, useNavigate   } from 'react-router-dom';


const Profile = () => {

//    const [profile, setProfile] = useState([]);
    const { profile, setProfile, updateProfile} = useProfile()
    const location =  useLocation();
    console.log(location)

    //const {} = useContext(ShopContext)
/*
    const getProfile = ()=> {
        const token = {token: localStorage.getItem('access-token') || ''}
        axios.post(process.env.REACT_APP_API_URL + "/account/profile",token)
        .then((res)=>{
          setProfile(res.data[0])
        })
    }

    useEffect(()=>{
        getProfile()
    },[])

    const updateProfile = async (e)=> {
        
        e.preventDefault();
        try{
            axios.put(process.env.REACT_APP_API_URL + "/account/profile/update",profile)
            .then(()=>{
                alert('Update Success');
                getProfile();
            }
            )
        }catch(err){
            console.log(err)
        }

    }
*/    
        
/*
    if(location?.state?.location.pathname==="/account/login"){
        alert("Please fill in Address and Phone number before making any purchase.")
    }
*/
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