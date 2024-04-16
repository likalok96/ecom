import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AccountNav from '../AccountNav';
import './Signup.css'
import FormInput from './FormInput';
import axios from 'axios';
import useSignup from '../../hook/useSignup';

const Signup = () => {

    const {profile, disable, handleChange, singupClick} = useSignup()
/*
    const [profile, setProfile] = useState({id :'',
                                            first_name:'',
                                            last_name:'',
                                            phone_number:'',
                                            address:'',
                                            email:'',
                                            password:'',
                                            confirm_password:'',
                                            });


    const [disable, setDisable] = useState(true);
//    const [error, setError] = useState('');

    const regex_name = new RegExp('^[^ ]+$')
    const regex_address = new RegExp('^[A-Za-z1-9 ]+$')
    const regex_email = new RegExp('^[^ ]+[1-9a-zA-Z]+[@]{1}[1-9a-zA-Z]+[.]{1}[a-z]+$')
    const regex_phone = new RegExp('^[0-9]{10}$')
    const regex_password = new RegExp('^[^ ]{6}$')

    const checkForm = () => {


        if( regex_name.test(profile.first_name) &&
            regex_name.test(profile.last_name) &&
            regex_address.test(profile.address) &&
            regex_email.test(profile.email) &&
            regex_phone.test(profile.phone_number) &&
            regex_password.test(profile.password) &&
            profile.confirm_password === profile.password
        ){
            setDisable(false)
        }else{
        setDisable(true)
        }

    }

    useEffect(()=>{
        checkForm()
    },[profile])



    const navigate = useNavigate()

    const handleChange = (e)=> {
        
        setProfile({...profile,[e.target.name]: e.target.value})
        console.log(e.target)
    }

    const singupClick = (e) => {
        e.preventDefault();
        axios.post(process.env.REACT_APP_API_URL + '/account/signup',profile)
        .then((res)=>{
            if(res.data.Message==='Sign up success'){
                console.log('success')
            } else {
                console.log(res.data.warningStatus)
                if (res.data.warningStatus===1){
                    alert('Email is already used.')
                } else {
                    alert('Sign up success.')
                    navigate('/account/login')
                }
                //.data.Message
            }
        }).catch((err)=>{
            console.log(err)
        })
    }
*/

//console.log(profile)

  return (
    <div className='account_main_wrapper signup_main_wrapper'>

    <div className='profile_main_wrapper'>
        <h1>Create Account</h1>
        <form className='profile_form'>
            <FormInput title='First Name' type='text' autoComplete='given-name' name='first_name' value={profile.first_name}  pattern='^[^ ]+$' err='Must not be blank.' onChange={handleChange} />
            <FormInput title='Last Name' type='text' autoComplete='family-name' name='last_name' value={profile.last_name}  pattern='^[^ ]+$' err='Must not be blank.' onChange={handleChange} />
            <FormInput title='Address' type='text' autoComplete='street-address' name='address' value={profile.address}  pattern='^[A-Za-z1-9 ]+$' err='Must not be blank or Contain special charater.' onChange={handleChange} />

            <FormInput title='Email' type='email' autoComplete='email' name='email' value={profile.email} pattern='^[^ ]+[1-9a-zA-Z]+[@]{1}[1-9a-zA-Z]+[.]{1}[a-z]+$' err='Please provide a valid email address.' onChange={handleChange} />
            <FormInput title='Mobile Number' autoComplete='tel' type='tel' name='phone_number' value={profile.phone_number}  pattern='^[0-9]{10}$' err='Please provide a valid phone number with 10 numbers.' onChange={handleChange} />
            <FormInput title='Password' autoComplete='new-password' type='password' name='password' value={profile.password}  pattern='^[^ ]{6,}$' err='Password should have more than 6 charaters.' onChange={handleChange} />
            <FormInput title='Confirm Password' autoComplete='new-password' type='password' name='confirm_password' value={profile.confirm_password}  pattern={profile.password} err='Confirm password is not the same as password.' onChange={handleChange} />



            <button type='submit' disabled={disable} onClick={(e)=>singupClick(e)}>CREATE ACCOUNT</button>
{/* */}
        </form>

    </div>

</div>
  )
}

export default Signup