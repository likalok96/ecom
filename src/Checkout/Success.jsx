import React, { useContext,useState,useEffect } from 'react'
import { ShopContext } from '../Context/ShopContext'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import './Success.css'
import OrderRecord from '../Component/OrderRecord'
import useSuccess from '../hook/useSuccess'

const Success = () => {
    const {cartItems} = useContext(ShopContext)

    const {checkout} = useSuccess()
//    const [order,SetOrder] = useState([])
//    const [checkout, setCheckout] = useState()
    const [cartShow,SetCartShow] = useState(false)

/*
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
*/

/*
            checkout_detail = { Shipping_Address: Object.values(shipping_address).join(' '),
                                Billing_Address: Object.values(billing_address).join(' '),
                                payment_method: data.payment_method_types[0],
                                subtotalCost: data.amount_subtotal/100,
                                totalCost: data.amount_total/100,
                                couponID: data?.total_details?.breakdown?.discounts[0]?.discount?.coupon?.id,
                                Date_Time: data.created
                              }
*/
/*
    useEffect( ()=>{
        axios.get(`http://localhost:3001/checkout/item/${session_id}`)
       .then((res)=>{
        let data = res.data;
        console.log('data: ' + data.price.product.metadata.prd_id)
    })
    },[])
*/


//    console.log(checkout.Date_Time)
//console.log(checkout.payment_method)

/*
    useEffect(()=>{
        const token = {token: localStorage.getItem('access-token') || ''}
        axios.post(process.env.REACT_APP_API_URL + "/account/order",token)
        .then((res)=>{
            SetOrder(res.data)
        })
    },[])
*/
/*
    const OrderRecord = ({order})=>{
        return(
        <div className='order_record order_spacing' onClick={()=>SetCartShow(!cartShow)}>

            <p>1</p>
            <div className='order_detail'>
                <p>Shipping Address: {order.Shipping_Address}</p>
                <p>Billing Address: {order.Billing_Address}</p>
            </div>
            <div>{new Date(order.Date_Time*1000).toLocaleString('en-GB')}</div>
            <div className='order_detail'>
                <p>Subtotal: {order.subtotalCost.toLocaleString('en-US',{style:'currency', currency: "HKD"})}</p>
                <p>Total: {order.totalCost.toLocaleString('en-US',{style:'currency', currency: "HKD"})}</p>
                <p>Discount Code: {order.couponID}</p>
            </div>
        </div>
        )
    }
*/

  return (
    <div className='success_outter_wrapper'>
        <h1>Order Success</h1>
        <div className='success_order_wrapper'>
            <div className='order_wrapper'>
                <div className='order_title order_spacing'>
                    <p>Order ID</p>
                    <p>Shipping Details</p>
                    <p>Order Time</p>
                    <p>Total Price</p>
                </div>
               {checkout ? <OrderRecord order={checkout} onClick={()=>SetCartShow(!cartShow)}/>:<div></div>}
               {/*cart */}
               <div className={cartShow ? 'success_cart_wrapper_show':'success_cart_wrapper_hide'} >
                
                <div className='cart_header cart_grid'>
                    <p>Product</p>
                    <div className='quan_total'>
                        <p >Quantity</p>
                        <p >Subtotal</p>
                    </div>
                </div>

                    {cartItems.map((s)=>
                    <div className='cart_info cart_grid'>
                        <div className='cart_info_product'>
                            <img src={s.image} alt="img" />
                            
                            <div>{s.brand} {s.name}</div>
                        </div>
                        <div className='quan_total'>
                            <div className='quantity text'>
                                <div>{s.quantity}</div>
                            </div>
                            <div className='subtotal text'>
                                <div>HK${s.quantity*s.price}.00</div>
                            </div>
                        </div>
                    </div>
                    
                    )}
                
            </div>
            {/*cart */}

            </div>
            
        </div>

{/* 
        <div className='success_main_wrapper' >
            
            <div className={cartShow ? 'success_cart_wrapper_show':'success_cart_wrapper_hide'} >
                
                <div className='cart_header cart_grid'>
                    <p>Product</p>
                    <p className='quantity'>Quantity</p>
                    <p className='subtotal'>Subtotal</p>
                </div>

                    {cartItems.map((s)=>
                    <div className='cart_info cart_grid'>
                        <div className='cart_info_product'>
                            <img src={s.image} alt="img" />
                            <div>{s.name}</div>
                        </div>
                        <div className='quantity text'>
                            <div>{s.quantity}</div>
                        </div>
                        <div className='subtotal text'>
                            <div>HK${s.quantity*s.price}.00</div>
                        </div>
                    </div>
                    
                    )}
                
            </div>

        </div>
        */}
                    
    </div>
  )
}

export default Success