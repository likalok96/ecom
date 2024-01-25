import React from 'react'
import { useNavigate } from 'react-router-dom'

const OrderRecord = ({order,onClick}) => {
    const navigate = useNavigate()
//()=>navigate(`/account/order/${order.Order_id}`)
console.log(order)
return(
    <div className='order_record order_spacing' onClick={onClick}>
{/*             <p>{order.Order_id}</p> */}
        <p className='order_start'>{order.Order_id ? order.Order_id : 'testing'}</p>
        <div className='order_detail'>
            <p>Address: {order.Delivery_Address}</p>
            {/*<p>Billing Address: {order.billing_id}</p>*/}
        </div>
        <div className=''>{order.Date_Time.slice(0,10)}</div>
        <div className='order_detail'>
            {/*<p>Subtotal: {order.subtotalCost.toLocaleString('en-US',{style:'currency', currency: "HKD"})}</p>*/}
            <p>Total: {order.totalCost.toLocaleString('en-US',{style:'currency', currency: "HKD"})}</p>
            <p>Discount Code: {order.couponID}</p>
        </div>
    </div>
    )
}

export default OrderRecord