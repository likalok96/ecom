import React from 'react'
import {TbTruckDelivery} from 'react-icons/tb'

const CheckoutBox = ({item, total, checkout}) => {
  const ProgressBar = () => {

    const containerStyles = {
      height: '10px',
      width: '100%',
      backgroundColor: "#f1f1f1",
      borderRadius: 20,
      margin: ' 20px 0 0 0'
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${total/300*100}%`,
      maxWidth: '100%',
      backgroundColor: '#f58220',
      borderRadius: 'inherit',
    }

    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
          
        </div>
      </div>
    )
  }

  return (
    <div className='checkout'>
        <div className='delivery_button'>
            <TbTruckDelivery/><span>Delivery</span>
        </div>
        <h3>Buy More, Save More</h3>
        {total >= 300 ? 
        <h4>$300 reached. Your order is eligible for FREE DELIVERY / PICKUP</h4>
        :
        <h4>Spend ${300-total} more for FREE DELIVERY / PICKUP</h4>
        }
        <ProgressBar />
        <p onClick={()=>checkout(item)}>CHECK OUT | HK${total}.00</p> 

        <div className='checkout_bottom'>
                <a href="">Shipping</a><h4> fee will be calculated at checkout</h4>
        </div>

        <div className='checkout_bottom'>
                <h4>Pickup service </h4><a href="">Terms & Conditions</a>
        </div>
    
    </div>
  )
}

export default CheckoutBox