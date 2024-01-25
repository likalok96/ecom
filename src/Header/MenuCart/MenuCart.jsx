import React,{useContext} from 'react'
import { ShopContext } from '../../Context/ShopContext';
import './MenuCart.css';
import prd1 from '../../assests/prd1.png'
import {AiOutlineHeart, AiOutlineCheckCircle,AiOutlineClose} from 'react-icons/ai'
import {BsTruck} from 'react-icons/bs'

const MenuCart = () => {

    const {showMenu , setShowMenu ,increCart, decreCart, removeCart} = useContext(ShopContext);

    const ProductCard = ()=> {
        return                 <div className='menu_cart_view'>
        <div className='menu_cart_card'>
            <img src={prd1} alt="" />
            <div className='menu_cart_card_info'>
                <p className='menu_brand'>Stella & Chewy's</p>
                <p className='menu_name'>Freeze Dried Duck & Goose Dinner Patties Dog Food</p>
                <p className='menu_detail'>14 oz</p>
                <div className='menu_bottom'>
                    <div className='menu_quantity'>
                        <p >-</p>
                        <span>0</span>
                        <p >+</p>
                    </div>
                    <div className='menu_subtotal'>
                        <span>HK$294.00</span>
                        <p >Remove</p>
                    </div>
                </div>

            </div>
        </div>

    </div>
    }


  return (
    <div className='menu_cart_bg'>
        <div className='menu_cart_wrapper'>

            <div className='menu_cart'>
                <div className='menu_cart_header'>
                    <p>2 Item(s) In Your Cart</p>
                    <div className='close'><AiOutlineClose/></div>
                </div>

                <div className='menu_cart_freeship'>
                    <span>Buy More, Save More</span>
                    <p>$300 reached. Your order is eligible for FREE DELIVERY / PICKUP</p>
                </div>

                <ProductCard/>
                <ProductCard/>
                <div className='menu_cart_check'>
                    <p className='menu_cart_checkout'>HK$123.00|View Cart</p>
                    <p className='menu_cart_shopping'>Continue Shopping</p>

                </div>

                <div className='menu_cart_box'>
                    <div>
                        <AiOutlineHeart/>
                        Honest Prices
                    </div>
                    <div>
                        <AiOutlineCheckCircle/>
                        Better Products
                    </div>
                    <div>
                        <BsTruck/>
                        Fast Delivery
                    </div>
                </div>
                
            </div>
            <div className='menu_cart_recom'>
                <div className='recom_header'>You May Also Like:</div>
                <div className='recom_product'>
                    <ProductCard/>

                </div>

            </div>
        </div>
    </div>
  )
}

export default MenuCart