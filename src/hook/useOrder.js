import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import useRefresh from '../RefreshToken/useRefresh';


const useOrder = () => {
    const [order,SetOrder] = useState([])
    const [login,SetLogin] = useState(false)

    const {logged, axiosInstance} = useRefresh()

    const navigate = useNavigate()

    useEffect(()=>{
        const token = {token: localStorage.getItem('access-token') || ''}

        //if (!localStorage.getItem('access-token')||token.token==='') {navigate("/account/login")}
       // else{


            
         axiosInstance.post(process.env.REACT_APP_API_URL + "/account/order",token)
        .then((res)=>{
            let data = res.data;
            console.log('ordering')
            SetOrder(data)
            SetLogin(true)
            }
        )
        .catch(err=>err)
        
            
    },[])

    return {order, login}
 
}

export default useOrder