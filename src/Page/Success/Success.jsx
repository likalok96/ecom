import React, { useContext,useState } from 'react'
import { ShopContext } from '../../Context/ShopContext'

import './Success.css'
import OrderRecord from '../../Component/OrderRecord/OrderRecord'
import useSuccess from '../../hook/useSuccess'

const Success = () => {
    const {cartItems} = useContext(ShopContext)

    const {checkout} = useSuccess()

    const [cartShow,SetCartShow] = useState(false)

  return (
    <div className='success_outter_wrapper'>
        <h1>Order Success</h1>
        <div className='success_order_wrapper'>
            <div className='order_wrapper'>
                <div className='order_title '>
                    <p>Order ID</p>
                    <p>Shipping Details</p>
                    <p>Order Time</p>
                    <p>Total Price</p>
                </div>
               {checkout ? <OrderRecord order={checkout} onClick={()=>SetCartShow(!cartShow)}/>:<div></div>}

               <div className={cartShow ? 'success_cart_wrapper_show':'success_cart_wrapper_hide'} >
                
                <div className='cart_header cart_grid'>
                    <p>Product</p>
                    <div className='quan_total'>
                        <p >Quantity</p>
                        <p >Subtotal</p>
                    </div>
                </div>

                    {cartItems.map((s)=>
                    <div className='cart_info cart_grid_card'>
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

            </div>
            
        </div>
                    
    </div>
  )
}

export default Success