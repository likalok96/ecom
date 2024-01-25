import React, { useState,useEffect, useContext } from 'react'
import AccountNav from '../AccountNav'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import prd1 from '../../assests/prd1.png'
import prd_img from '../../mysql_data/productLinks.json'
import './OrderDetail.css'
import { ShopContext } from '../../Context/ShopContext'
import useOrderDetail from '../../hook/useOrderDetail'
import useCheckout from '../../hook/useCheckout'
import ProductCard from '../../Component/ProductCard'
import AccountBack from '../AccountBack'

const OrderDetail = () => {

    const {addToCart,addAllToCart, increCart, decreCart, removeCart} = useContext(ShopContext);
    

//    const {order_id} = useParams();

//    const [orderItem, SetOrderItem] = useState([]);

//    console.log(orderItem)

/*    
    useEffect(()=>{
        const getOrderItem = async () =>{
            const token = {token: localStorage.getItem('access-token') || ''}
            const result = await axios.post(process.env.REACT_APP_API_URL + `/account/order/${order_id}`,token)
            .then((res)=>{
                SetOrderItem(res.data)
            })
        }
        getOrderItem()
    },[])
*/
    const {orderItem} = useOrderDetail()

    const item = JSON.stringify({items:orderItem})

//    console.log(order_id)

/*
    const item = JSON.stringify({items:orderItem})

    let config = {
        headers: {
            "Content-Type": "application/json",
        }
      }

    const checkout = ()=> {
        axios.post(process.env.REACT_APP_API_URL + '/create-checkout-session',item,config)
        .then((res) =>{
            console.log(res.data.url)
            window.location = res.data.url
        })
        .catch(err => {
            console.log(err)
        })
    }
*/
    const {checkout, getOrderTotal} = useCheckout()
/*
    const ProductCard = ({prd})=> {


        const str = prd.brand + ' ' + prd.name
        prd.image = prd_img[str]

    
        function onError(e) {
          e.target.onerror = null;
          e.target.src = prd1;
          
        }
    
    
        return (
        <div className='cart_info cart_grid'>
            <div className='cart_info_product text'>
                <img src={prd.image} alt="img" />
                <div>{prd.brand}  {prd.name}</div>
            </div>
            <div className='quantity text'>
                <div>{prd.quantity}</div>
            </div>
            <div className='subtotal text'>
                <div>{(prd.price*1).toLocaleString('en-US',{style:'currency', currency: "HKD"})}</div>
                <p onClick={()=>addToCart(prd)}>Add to Cart</p>
            </div>
        </div>
        )
    
      }
*/
/*
      const getOrderTotal = () =>{
        let total = 0;
        orderItem.forEach(item => {
            total += item.quantity*item.price
          });
          return total
      }
*/

  return (
    <div className='account_main_wrapper'>

        <AccountBack text={'Order Detail'} url={'/account/order'} />

        <div className='account_nav_wrapper'>
            <AccountNav/>  
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
                    <button className='reorder_button' onClick={()=>addAllToCart(orderItem)}>Add All to Cart</button>
                    <button className='reorder_button' onClick={()=>checkout(item)}>Re-Order</button>
                    <p>Total:    </p>
                    <span>{getOrderTotal(orderItem).toLocaleString('en-US',{style:'currency', currency: "HKD"})}</span>
                </div>
            </div>
            
        </div>
        :
        <div>loading</div>}
        

    </div>
    )
}
/**

                    <div className='cart_info cart_grid'>
                        <div className='cart_info_product'>
                            <img src={matchImg(prd)} alt="img" />
                            <div>{prd.brand}  {prd.name}</div>
                        </div>
                        <div className='quantity text'>
                            <div>{prd.quantity}</div>
                        </div>
                        <div className='subtotal text'>
                            <div>HK${prd.price.toLocaleString()}.00</div>
                            <button onClick={()=>addToCart(prd)}>Add to Cart</button>
                        </div>
                    </div>
 */
export default OrderDetail