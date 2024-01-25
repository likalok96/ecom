import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import useRefresh from '../RefreshToken/useRefresh'

const useCheckout = () => {

    const navigate = useNavigate()

    const { axiosInstance} = useRefresh()

    let config = {
        headers: {
            "Content-Type": "application/json",
        }
      }

    const checkout = (item)=> {
        const token = {token: localStorage.getItem('access-token') || ''}
        item = {...item,['token']: localStorage.getItem('access-token') || ''}
        console.log(item)

        if (!localStorage.getItem('access-token')||token.token==='') {navigate("/account/login")}

        axiosInstance.post(process.env.REACT_APP_API_URL + '/create-checkout-session',item,config)
        .then((res) =>{
            console.log(res.data.url)
            window.location = res.data.url
        })
        .catch(err => {
            console.log(err)
        })
    }

    const getOrderTotal = (orderItem) =>{
        let total = 0;
        orderItem.forEach(item => {
            total += item.quantity*item.price
          });
          return total
      }

    return {checkout, getOrderTotal}
}

export default useCheckout