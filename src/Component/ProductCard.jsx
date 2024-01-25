import React from 'react'
import prd1 from '../assests/prd1.png'
import prd_img from '../mysql_data/productLinks.json'


const ProductCard = ({prd, addToCart, cart, decreCart, increCart, removeCart })=> {


    const str = prd.brand + ' ' + prd.name
    prd.image = prd_img[str]


    function onError(e) {
      e.target.onerror = null;
      e.target.src = prd1;
      
    }


    return (
    <div className='cart_info cart_grid'>
        <div className='cart_info_product text'>
            <img className='cart_info_product_img  ' src={prd.image} alt="img" onError={(e)=>onError(e)}/>
            <div className='cart_info_product_name  '>{prd.brand}  {prd.name}</div>
        </div>

        <div className='quan_total'>
            <div className={cart ? 'quantity quantity_border text':'quantity text'}>
                {cart && <p onClick={()=>decreCart(prd)}>-</p>}
                <p>{prd.quantity}</p>
                {cart && <p onClick={()=>increCart(prd)}>+</p>}
            </div>
            <div className='subtotal text'>
                <div>{(prd.price*prd.quantity).toLocaleString('en-US',{style:'currency', currency: "HKD"})}</div>
                {cart ? <p onClick={()=>removeCart(prd)}>Remove</p> :
                <p onClick={()=>addToCart(prd,1)}>Add to Cart</p> }
            </div>
        </div>
    </div>
    )

  }

export default ProductCard