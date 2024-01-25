import {  useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { useGoogleLogin,useGoogleOneTapLogin,GoogleLogin   } from '@react-oauth/google';
import jwt_decode from "jwt-decode";


const useLogin = () => {
    const location = useLocation();

  const [user, setUser] = useState({name: '', password: ''});
//  const [google, setGoogle] = useState()
const google_client_id = '1087005348930-mljeqbal7qquh9kssbof6hvmeb9nagnt.apps.googleusercontent.com'

  const navigate = useNavigate();

//  axios.defaults.withCredentials = true;

  const login = (e)=> {
      e.preventDefault()
      axios.post(process.env.REACT_APP_API_URL + "/account/login",user)
      .then(res=>{
          if(res.data.Status ==='Success') {
              localStorage.setItem("access-token", res.data.accessToken)
              localStorage.setItem("refresh-token", res.data.Token)
              localStorage.setItem("refresh-token-exp", jwt_decode(res.data.Token).exp)
              
              navigate("/account",{ state: {location} })
              //navigate("/order",{ state: {location} })

          } else {
              alert(res.data.Message)
          }
      })
      .catch(err=> console.log(err));
  }

  const login_test = async (google) =>{
    try{
    let response = await fetch(`https://www.googleapis.com/oauth2/v2/userinfo?access_token=${google.access_token}`)

    let res = await response.json();
    
    console.log(res)

    await axios.post(process.env.REACT_APP_API_URL + "/account/google",res)
    .then(res=>{
        if(res.data.Status ==='Success') {
            localStorage.setItem("access-token", res.data.accessToken)
            localStorage.setItem("refresh-token", res.data.Token)
            localStorage.setItem("refresh-token-exp", jwt_decode(res.data.Token).exp)
            navigate("/account",{ state: {location} })
            
        } else {
            alert(res.data.Message)
        }
    })
    .catch(err=> console.log(err));

    
    } catch (err) {
        console.log(err)
    }
  }
/*
  const google_login = useGoogleLogin({
    onSuccess: codeResponse => 
    {
        console.log(codeResponse)
        fetch(`https://www.googleapis.com/oauth2/v2/userinfo?access_token=${codeResponse.access_token}`,
        {
            method: 'GET',
            withCredentials: true,
            credentials: 'include',
            Headers:{
                'Authorization': `Bearer ${codeResponse.access_token}`,
                'Content-Type': 'application/json'
            }
        }   
        
        )
        .then((res)=>{
            console.log(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    


  });
*/

/*
  const login_google = (google) =>{
    axios.get(`https://www.googleapis.com/oauth2/v2/userinfo`,
    {
        headers: 
        {
            Authorization: `Bearer ${google.access_token}`,
            'Access-Control-Allow-Credentials': 'true'
        }
    }
    )
    .then((res)=>{
        console.log(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })
  }

*/
  const google_login = useGoogleLogin({
    onSuccess:  tokenResponse => {
      console.log(tokenResponse);
      login_test(tokenResponse)

    }
    });


  return {login, google_login, login_test, user, setUser}

}

export default useLogin