import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import useCheckout from '../hook/useCheckout';

const Checkout = () => {

    const {cartItems} = useContext(ShopContext)

    const item = JSON.stringify({items:cartItems})
    console.log(item)

    const {checkout} = useCheckout()

  return (
    <div onClick={()=>checkout(item)}>Checkout</div>
  )
}

export default Checkout