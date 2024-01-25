import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const useSuccess = () => {
    const [checkout, setCheckout] = useState()

    const {session_id} = useParams()

    let checkout_detail;
    let shipping_address;
    let billing_address;

    useEffect( ()=>{
         axios.get(process.env.REACT_APP_API_URL + `/checkout/session/${session_id}`)
        .then((res)=>{

            let data = res.data;
            
            shipping_address = data.shipping_details.address;
            billing_address = data.customer_details.address;

            checkout_detail = { Delivery_Address: Object.values(shipping_address).join(' '),
                                billing_id: Object.values(billing_address).join(' '),
                                payment_method: data.payment_method_types[0],
                                subtotalCost: data.amount_subtotal/100,
                                totalCost: data.amount_total/100,
                                couponID: data?.total_details?.breakdown?.discounts[0]?.discount?.coupon?.id,
                                Date_Time: new Date(data.created*1000).toLocaleString('en-GB')
                              }
             setCheckout(checkout_detail)

            console.log(res.data)
        })
    },[])

    return {checkout}
}

export default useSuccess