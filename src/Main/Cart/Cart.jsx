import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import './Cart.css'

import useCheckout from '../../hook/useCheckout'
import ProductCard from '../../Component/ProductCard/ProductCard'
import CheckoutBox from '../../Component/CheckoutBox/CheckoutBox'

const Cart = () => {

    const {cartItems, increCart, decreCart, removeCart, getTotal, addToCart} = useContext(ShopContext);

    const total = getTotal();

    const item = {items:cartItems}

    const {checkout} = useCheckout()

    if(cartItems.length===0) return (
        <div className='no_cart_item'>
            <p>Your Cart is Empty</p>
            <span>You haven't added any items yet.</span>
            <a href='/'>CONTINUE SHOPPING</a>
        </div>
    )

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
                    <ProductCard key={prd.id} prd={prd} addToCart={addToCart} cart={true} decreCart={decreCart} increCart={increCart} removeCart={removeCart}  />
                    )}

            </div>
        </div>
        
        <CheckoutBox item={item} total={total} checkout={checkout}/>

    
    </div>


    
  )
}

export default Cart