import React, {  useEffect, useState } from 'react'
import AccountNav from '../AccountNav'
import './Order.css'
import { useNavigate } from 'react-router-dom';
import useOrder from '../../../hook/useOrder';
import OrderRecord from '../../../Component/OrderRecord/OrderRecord';
import AccountBack from '../AccountBack';

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import useProfile from '../../../hook/useProfile';

const Order = () => {
    const {profile} = useProfile()

    const {order, login} = useOrder()

    const [loading , setLoading] = useState(false)
    useEffect(()=>{
        setTimeout(() => {
            setLoading(true)
        }, 500);

    },[])
    
    const navigate = useNavigate()

  return (login && loading)?(

    <div className='account_main_wrapper'>

        <AccountBack url={'/account'} text={'Order Record'}/>

        <div className='account_nav_wrapper'>
            <AccountNav profile={profile}/>
        </div>

        <div className='order_main_wrapper'>
            {order.length>0 ?
            (
                <div className='order_wrapper'>
                    <div className='order_title '>
                        <p>Order ID</p>
                        <p>Shipping Details</p>
                        <p>Order Time</p>
                        <p>Total Price</p>
                    </div>
                    {order.map((s)=><OrderRecord order = {s} onClick={()=>navigate(`/account/order/${s.Order_id}`)}/>)}
                </div>
            )
            :
            <div className='no_order_wrapper'>
                <p>Order Record</p>
                <span>You haven't placed any orders yet.</span>
                <a href='/'>CONTINUE SHOPPING</a>
            </div>
            }

        </div>


    </div>
  )
  :
  (
    <div className='account_main_wrapper'>

        <AccountBack url={'/account'} text={'Order Record'}/>

        <div className='account_nav_wrapper'>
            <AccountNav/>
        </div>

        <div className='order_main_wrapper'>
            
            
                <div className='order_wrapper'>
                    <div className='order_title order_spacing'>
                        <p>Order ID</p>
                        <p>Shipping Details</p>
                        <p>Order Time</p>
                        <p>Total Price</p>
                    </div>
                    {<Skeleton height={100} count={5} />}
                </div>
            
            

        </div>


    </div>
)
}

export default Order