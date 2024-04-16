import React from 'react'
import './OrderRecord.css'
const OrderRecord = ({order,onClick}) => {
    
return(
    <div className='order_record order_spacing' onClick={onClick}>
{/*             <p>{order.Order_id}</p> */}
        

        <p className='order_start'>
            <div className='order_header'>Order ID:&nbsp;</div>
            {order.Order_id ? order.Order_id : 'testing'}
        </p>
        
        <div className='order_detail'>
            <p>Address: {order.Delivery_Address}</p>
            {/*<p>Billing Address: {order.billing_id}</p>*/}
        </div>
        
        <div className='order_time'>
            <div className='order_header'>Order Time:&nbsp;</div>
            {order.Date_Time.slice(0,10)}
        </div>
        <div className='order_detail'>
            {/*<p>Subtotal: {order.subtotalCost.toLocaleString('en-US',{style:'currency', currency: "HKD"})}</p>*/}
            <p>Total: {order.totalCost.toLocaleString('en-US',{style:'currency', currency: "HKD",minimumFractionDigits: 0})}</p>
            <p>Discount Code: {order.couponID}</p>
        </div>
    </div>
    )
}

export default OrderRecord