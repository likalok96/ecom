import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useRefresh from './useRefresh';

const useOrderDetail = () => {
    const [orderItem, SetOrderItem] = useState([]);

    const {order_id} = useParams();
    const {axiosInstance} = useRefresh()

    
    useEffect(()=>{
        const getOrderItem =  () =>{
            const token = {token: localStorage.getItem('access-token') || ''}
            axiosInstance.post(process.env.REACT_APP_API_URL + `/account/order/${order_id}`,token)
            .then((res)=>{
                SetOrderItem(res.data)
            })
        }
        getOrderItem()
        // eslint-disable-next-line
    },[])

    return {orderItem}

}

export default useOrderDetail