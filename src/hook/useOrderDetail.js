import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import useRefresh from '../RefreshToken/useRefresh';

const useOrderDetail = () => {
    const [orderItem, SetOrderItem] = useState([]);

    const {order_id} = useParams();
    const {logged,axiosInstance} = useRefresh()

    
    useEffect(()=>{
        const getOrderItem = async () =>{
            const token = {token: localStorage.getItem('access-token') || ''}
            const result = await axiosInstance.post(process.env.REACT_APP_API_URL + `/account/order/${order_id}`,token)
            .then((res)=>{
                SetOrderItem(res.data)
            })
        }
        getOrderItem()
    },[])

    return {orderItem}

}

export default useOrderDetail