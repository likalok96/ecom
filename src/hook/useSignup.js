import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const useSignup = () => {

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

    const regex_name = new RegExp('^[^ ]+$')
    const regex_address = new RegExp('^[A-Za-z1-9 ]+$')
    const regex_email = new RegExp('^[^ ]+[1-9a-zA-Z]+[@]{1}[1-9a-zA-Z]+[.]{1}[a-z]+$')
    const regex_phone = new RegExp('^[0-9]{10}$')
    const regex_password = new RegExp('^[^ ]{6,}$')

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
        //console.log(e.target)
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

    return {profile, disable, handleChange, singupClick}

}

export default useSignup