import axios from 'axios'
import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import useCheckout from '../hook/useCheckout';

const Checkout = () => {

    const {cartItems} = useContext(ShopContext)

    const item = JSON.stringify({items:cartItems})

    const {checkout} = useCheckout()


    
/*
    const item = JSON.stringify({items:[
        { id: 1, quantity: 3 },
        { id: 2, quantity: 1 },
    ]});

    let config = {
        headers: {
            "Content-Type": "application/json",
        }
      }

    const checkout = ()=> {
        axios.post(process.env.REACT_APP_API_URL + '/create-checkout-session',item2,config)
        .then((res) =>{
            console.log( res.data.url)
            window.location = res.data.url
        })
        .catch(err => {
            console.log(err)
        })
    }
*/
/*
const checkout = ()=> {
fetch("http://localhost:3001/create-checkout-session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      items: [
        { id: 1, quantity: 3 },
        { id: 2, quantity: 1 },
      ],
    }),
  })
    .then(res => {
      if (res.ok) return res.json()
      return res.json().then(json => Promise.reject(json))
    })
    .then(({ url }) => {
      window.location = url
    })
    .catch(e => {
      console.error(e.error)
    })
}
*/

  return (
    <div onClick={()=>checkout(item)}>Checkout</div>
  )
}

export default Checkout