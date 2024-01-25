import React, { useContext, useEffect, useState } from 'react'
import AccountNav from '../AccountNav'
import './Order.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useOrder from '../../hook/useOrder';
import OrderRecord from '../../Component/OrderRecord';
import {AiOutlineArrowLeft} from 'react-icons/ai'
import AccountBack from '../AccountBack';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import useProfile from '../../hook/useProfile';

const Order = () => {


//    const [order,SetOrder] = useState([])
//    const [login,SetLogin] = useState(false)

//    const navigate = useNavigate()
    const {profile} = useProfile()

    const {order, login} = useOrder()

    const [loading , setLoading] = useState(false)
    useEffect(()=>{
        setTimeout(() => {
            setLoading(true)
        }, 1000);

    },[])
    
    const navigate = useNavigate()
console.log(order)
/*
    useEffect(()=>{
        const token = {token: localStorage.getItem('access-token') || ''}
        axios.post(process.env.REACT_APP_API_URL + "/account",token)
        .then(res=>{
            if(res.data.Status==="Success"){
                SetLogin(true)
            }else{
                navigate("/account/login")
            }
        })
    },[])
*/
/*
    useEffect(()=>{
        const token = {token: localStorage.getItem('access-token') || ''}

        if (!localStorage.getItem('access-token')||token==={token:''}) {navigate("/account/login")}
        else{

        axios.post(process.env.REACT_APP_API_URL + "/account/order",token)
        .then((res)=>{
            SetOrder(res.data)
            SetLogin(true)
        })
            }
    },[])
    */
/*
    const OrderRecord = (order)=>{
        return(
        <div onClick={()=>navigate(`/account/order/${order.Order_id}`)} className='order_record order_spacing'>
            <p>{order.Order_id}</p>
            <div className='order_detail'>
                <p>Address: {order.Delivery_Address}</p>
                <p>Shipper id: {order.Shipper_id}</p>
                <p>Billing id: {order.billing_id}</p>
            </div>
            <div>{order.Date_Time.slice(0,10)}</div>
            <div className='order_detail'>
                <p>${order.totalCost.toLocaleString()}.00</p>
                {order.couponID? <p className='coupon'>Coupon: {order.couponID}</p>:<p></p>}
            </div>
        </div>
        )
    }
*/
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
                    <div className='order_title order_spacing'>
                        <p>Order ID</p>
                        <p>Shipping Details</p>
                        <p>Order Time</p>
                        <p>Total Price</p>
                    </div>
                    {/*order.map((s)=>OrderRecord(s))*/}
                    {order.map((s)=><OrderRecord order = {s} onClick={()=>navigate(`/account/order/${s.Order_id}`)}/>)}
                </div>
            )
            :
            <div className='no_order_wrapper'>
                <p>Order Record</p>
                <span>You haven't placed any orders yet.</span>
                <button>CONTINUE SHOPPING</button>
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