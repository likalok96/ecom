import { useEffect, useState } from 'react'
import useRefresh from './useRefresh';


const useOrder = () => {
    const [order,SetOrder] = useState([])
    const [login,SetLogin] = useState(false)

    const {axiosInstance} = useRefresh()


    useEffect(()=>{
        const token = {token: localStorage.getItem('access-token') || ''}
            
         axiosInstance.post(process.env.REACT_APP_API_URL + "/account/order",token)
        .then((res)=>{
            let data = res.data;
            console.log('ordering')
            SetOrder(data)
            SetLogin(true)
            }
        )
        .catch(err=>err)
// eslint-disable-next-line
    },[])

    return {order, login}
 
}

export default useOrder