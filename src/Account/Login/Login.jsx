import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css'
import {AiOutlineGoogle} from 'react-icons/ai'
import {BiLogoFacebook} from 'react-icons/bi'
import useLogin from '../../hook/useLogin';
import { GoogleLogin } from '@react-oauth/google';


const Login = () => {

//    const {auth, setAuth} = useContext(ShopContext);

//    const [user, setUser] = useState({name: '', password: ''});

//    const navigate = useNavigate();

//    axios.defaults.withCredentials = true;
const {getQuantity,exp,setExp} = useContext(ShopContext);

    const {login, google_login, user , setUser} = useLogin();
    const login2 = (e) =>{
        login(e)
        setExp(true)
    }
/*
    const login = (e)=> {
        e.preventDefault()
        axios.post(process.env.REACT_APP_API_URL + "/account/login",user)
        .then(res=>{
            if(res.data.Status ==='Success') {
                localStorage.setItem("access-token", res.data.Token)
//                setAuth(true)
                navigate("/account")
            } else {
                alert(res.data.Message)
            }
        })
        .catch(err=> console.log(err));
    }
*/
  return (
    <div className='login_main_wrapper'>
        <div className='login_wrapper'>
            <p>Customer Sign In</p>
            <form onSubmit={login2} className='login_form'>
                <label >Name</label>
                <input name='name' onChange={(e)=> setUser({...user,name: e.target.value})}></input>

                <label >Password</label>
                <input type='password' name='password' onChange={(e)=> setUser({...user,password: e.target.value})}></input>

                <a className='login_form_create' href="">Forget your password?</a>

                <button disabled={(user.name && user.password ? false: true)} type='submit'>SIGN IN</button>

                <a className='login_form_create' href="/account/signup">Create account</a>

                <div className='hr_line'>
                    <hr/><div>OR</div><hr />
                </div>
                
            </form>
            <div className='login_social'>
                <span>Sign In With</span>
                <div className='login_social_button'>
                    <button className='facebook' ><BiLogoFacebook/>Facebook</button>
                    <button className='google' onClick={()=>google_login()}><AiOutlineGoogle/>Google</button>

                </div>
            </div>

            
        </div>
    </div>
  )
}

export default Login