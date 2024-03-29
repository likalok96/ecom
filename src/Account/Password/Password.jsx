import React, { useEffect, useState } from 'react'
import './Password.css'
import axios from 'axios';
import AccountNav from '../AccountNav';
import { useNavigate } from 'react-router-dom';
import useProfile from '../../hook/useProfile';
import AccountBack from '../AccountBack';

const Password = () => {

    const {profile, confirm, setProfile, setConfirm, updatePassword} = useProfile()

    
/*
    const [profile, setProfile] = useState([]);

    const [confirm, setConfirm] = useState('');

    const navigate = useNavigate()

    axios.defaults.withCredentials = true;

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
*/
/*
    const logout = ()=> {
//        e.preventDefault();
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
/*
    const updateProfile = async (e)=> {
        e.preventDefault();
        if (confirm===profile.Password){
            try{
                axios.put(process.env.REACT_APP_API_URL + "/account/profile/update",profile)
                .then(()=>{
                    alert('Update Success');
                    logout();
                }
                )
            }catch(err){
                console.log(err)
            }
        }
    }
*/
//console.log(profile)

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
                {(profile?.Password===confirm || confirm.length==0)?<div></div>:<p>Confirm password is not the same as password.</p>}

                <button type='submit' disabled={profile?.Password!=confirm || confirm.length<6} onClick={(e)=>updatePassword(e)}>UPDATE ACCOUNT</button>
{/* */}
            </form>

        </div>

    </div>
        
          )
}

export default Password