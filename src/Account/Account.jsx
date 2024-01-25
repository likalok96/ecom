import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Account.css'
import {AiOutlineMail} from 'react-icons/ai'
import {GoSignOut} from 'react-icons/go'
import AccountNav from './AccountNav';
import useProfile from '../hook/useProfile';
import Login from './Login/Login';


const Account = () => {
/*
    const {auth, setAuth} = useContext(ShopContext);

    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [message, setMessage] = useState('');
    const [profile, setProfile] = useState([]);
*/
const {getQuantity,exp} = useContext(ShopContext);
    const navigate = useNavigate();

    const {getProfile,profile} = useProfile()

    const token = {token: localStorage.getItem('access-token') || ''}
    
//    console.log(token)

 // const [profile, setProfile] = useState([]);
//    axios.defaults.withCredentials = true;

    useEffect( ()=>{

      const token = {token: localStorage.getItem('access-token') || ''}
      if (!localStorage.getItem('access-token')||token.token==='') {navigate("/account/login")}


/*
      console.log(token)
      if (!localStorage.getItem('access-token')||token==={token:''}) {navigate("/account/login")}
      else{
        axios.post(process.env.REACT_APP_API_URL + "/account",token)
        .then(res=>{
            if(res.data.Status==="Success"){
                setName(res.data.name)
                setId(res.data.id)
            }else{
                navigate("/account/login")
            }
        })}
        */
    }

    ,[])
/*
    useEffect(()=>{
      const token = {token: localStorage.getItem('access-token') || ''}
      console.log(token)
      if (!localStorage.getItem('access-token')||token==={token:''}) {navigate("/account/login")}
      else{

      axios.post(process.env.REACT_APP_API_URL + "/account/profile",token)
      .then((res)=>{
        setProfile(res.data[0])
      })}
  },[])
  (!localStorage.getItem('access-token')||token.token==='')
*/
  return (
    <div className='account_outter_wrapper'>
    <div className='account_main_wrapper'>
      { <AccountNav profile={profile}/>}


    </div>
    </div>
  )
}
/*
<div className='account_nav'>
        <div className='account_info'>
          <p>{profile.Name}</p>
          <div className='account_info_email'>
            <AiOutlineMail/> <span>{profile.EmailID}</span>
          </div>
        </div>
        <a href='/account/order'>Order Records</a>
        <a href="/account/profile">My Profile</a>
        <a href="">Family Profile</a>
        <a href="">Shipping Address</a>

        <a href="">Reset Password</a>
        <a href="" className='signout'>Sign Out<GoSignOut/></a>
      </div>
*/

export default Account