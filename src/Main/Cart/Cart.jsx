import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import './Cart.css'
import axios from 'axios'
import {TbTruckDelivery} from 'react-icons/tb'
import useCheckout from '../../hook/useCheckout'
import ProductCard from '../../Component/ProductCard'
import CheckoutBox from '../../Component/CheckoutBox'

const Cart = () => {

    const {cartItems, increCart, decreCart, removeCart, getTotal, addToCart} = useContext(ShopContext);


    const total = getTotal();

//    const keys = Object.keys(cartItems);

//    const item = JSON.stringify({items:cartItems})

    const item = {items:cartItems}

    const {checkout} = useCheckout()
/*
    let config = {
        headers: {
            "Content-Type": "application/json",
        }
      }

    const checkout = ()=> {
        axios.post(process.env.REACT_APP_API_URL + '/create-checkout-session',item,config)
        .then((res) =>{
            console.log( res.data.url)
            window.location = res.data.url
        })
        .catch(err => {
            console.log(err)
        })
    }
*/
  return (
    <div className='cart_page'>
        <div className='cart'>
            <h1 className='cart_title'>My Cart</h1>

            <div className='cart_main_wrapper '>
                
                <div className='cart_header cart_grid'>
                    <p>Product</p>
                    <div className='quan_total'>
                        <p >Quantity</p>
                        <p className='subtotal'>Subtotal</p>
                    </div>
                </div>
                    {cartItems.map((prd)=>
                    <ProductCard prd={prd} addToCart={addToCart} cart={true} decreCart={decreCart} increCart={increCart} removeCart={removeCart}  />
                    )}

                    {/*cartItems.map((s)=>
                    <div className='cart_info cart_grid'>
                        <div className='cart_info_product text'>
                            <img src={s.image} alt="img" />
                            <div>{s.brand} {s.name}</div>
                        </div>
                        <div className='quantity text'>
                            <p onClick={()=>decreCart(s)}>-</p>
                            <div>{s.quantity}</div>
                            <p onClick={()=>increCart(s)}>+</p>
                        </div>
                        <div className='subtotal text'>
                            <div>{(s.quantity*s.price).toLocaleString('en-US',{style:'currency', currency: "HKD"})}</div>
                            <p onClick={()=>removeCart(s)}>Remove</p>
                        </div>
                    </div>
                    
  )*/}
                
            </div>
        </div>
        <CheckoutBox item={item} total={total} checkout={checkout}/>
{/* 
        <div className='checkout'>
            <div className='delivery_button'><TbTruckDelivery/><span>Delivery</span></div>
            <h3>Buy More, Save More</h3>
            <h4>$300 reached. Your order is eligible for FREE DELIVERY / PICKUP</h4>
           <p onClick={()=>checkout(item)}>CHECK OUT | HK${total}.00</p> 
           <div className='checkout_bottom'>
                <a href="">Shipping</a><h4> fee will be calculated at checkout</h4>
           </div>
           <div className='checkout_bottom'>
                <h4>Pickup service </h4><a href="">Terms & Conditions</a>
           </div>
           
            </div>
*/}
        
    
    </div>


    
  )
}

export default Cart