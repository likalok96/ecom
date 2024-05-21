import React, { createContext, useEffect, useState } from 'react'
import useRefresh from '../hook/useRefresh';

export const AuthContext = createContext(null);
const AuthContextProvider = (props) => {

//    const {axiosInstance} = useRefresh()
    const profile = localStorage.getItem('profile')
    //const authProfile = JSON.parse( profile|| null)

    const [authProfile, setAuthProfile] = useState(JSON.parse( profile || null)); 

     useEffect(()=>{

        !authProfile && setAuthProfile(JSON.parse( profile || null))
        
// eslint-disable-next-line
    },[]) 

    //const authProfile = JSON.parse( profile || null)  

//    const [profile, setProfile] = useState(JSON.parse(localStorage.getItem('profile')));

/*     const getProfile = ()=> {
        const token = {token: localStorage.getItem('access-token') || ''}
        axiosInstance.post(process.env.REACT_APP_API_URL + "/account/profile",token)
        .then((res)=>{
            console.log('profile')
            console.log(res.data)
            setProfile(res.data[0])
            return res.data[0]
        })
        .catch(err=>console.log('profile err'))
        
    }

    useEffect(()=>{

        !(localStorage.getItem('refresh-token-exp') > Math.floor(Date.now()/1000)) && getProfile()
        
// eslint-disable-next-line
    },[]) */

    const contextValue = {authProfile};


  return (
    <AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider