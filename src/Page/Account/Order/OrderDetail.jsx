import React, { useContext } from 'react'
import AccountNav from '../AccountNav'

import './OrderDetail.css'
import { ShopContext } from '../../../Context/ShopContext'
import useOrderDetail from '../../../hook/useOrderDetail'
import useCheckout from '../../../hook/useCheckout'
import ProductCard from '../../../Component/ProductCard/ProductCard'
import AccountBack from '../AccountBack'
import useProfile from '../../../hook/useProfile'

const OrderDetail = () => {

    const {addToCart,addAllToCart, increCart, decreCart, removeCart} = useContext(ShopContext);
    
    const {profile} = useProfile()

    const {orderItem} = useOrderDetail()

    const item = {items:orderItem}

//    const item = JSON.stringify({items:orderItem})

    const {checkout, getOrderTotal} = useCheckout()


  return (
    <div className='account_main_wrapper'>

        <AccountBack text={'Order Detail'} url={'/account/order'} />

        <div className='account_nav_wrapper'>
            <AccountNav profile={profile}/>  
        </div>
        {orderItem.length>0?
        <div className='order_main_wrapper '>
            
            <div className='cart_border'>
                
                <div className='cart_header cart_grid '>
                    <p>Product</p>
                    <div className='quan_total'>
                        <p >Quantity</p>
                        <p className='subtotal'>Subtotal</p>
                    </div>
                </div>

                    {orderItem.map((prd)=>
                    <ProductCard prd={prd} addToCart={addToCart} cart={false} decreCart={decreCart} increCart={increCart} removeCart={removeCart}  />

                    
                    )}
                <div className='order_total'>
                    <div className='reorder_button_bottom'>
                        <button className='reorder_button' onClick={()=>addAllToCart(orderItem)}>Add All to Cart</button>
                        <button className='reorder_button' onClick={()=>checkout(item)}>Re-Order</button>
                    </div>
                    <div className='order_total_bottom'>
                        <p>Total:    </p>
                        <span>{getOrderTotal(orderItem).toLocaleString('en-US',{style:'currency', currency: "HKD"})}</span>
                    </div>
                </div>
            </div>
            
        </div>
        :
        <div>loading</div>}
        

    </div>
    )
}

export default OrderDetail