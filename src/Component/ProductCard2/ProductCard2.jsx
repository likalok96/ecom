import React, { useContext,useState } from 'react'
import prd1 from '../../assests/prd1.png'
import {FaStar} from 'react-icons/fa'
import { FaHeart,FaRegHeart  } from "react-icons/fa";

import { ShopContext } from '../../Context/ShopContext'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useQuery } from '@tanstack/react-query'
import './ProductCard2.css'

const ProductCard2 = ({prd, discount}) => {

  const {addToCart,getAvgScore,getReview,handleWishlist,wishItems} = useContext(ShopContext)

  const [heart , setHeart] = useState(wishItems[prd.id]? true : false)

  const reviewQuery = useQuery({queryKey: ['review'],queryFn: getReview});
  const reviewRecord = reviewQuery.data

  let avg_score = getAvgScore(reviewRecord?.filter((record)=>record.product_id===prd.id))

  
    function onError(e) {
        e.target.onerror = null;
        e.target.src = prd1;
        
      }

    const StarRate = (rating)=> {
        const array = [1,2,3,4,5];

        return(
        <div className='prd_rating'>
            { array.map((num)=><FaStar key={num} color={(rating) >= num ? '#f58220' : 'a9a9a9'}/>)}
        </div>
        )
    }

    if(!prd ) return (
      <div style={ {border: '1px solid rgba(211, 214, 217, 1)', borderRadius:'20px', padding:'10px'}}>
        <Skeleton containerClassName="flex-1" height={'20vh'}/> 
        <Skeleton containerClassName="flex-1" height={48+48+36+72-20}/> 
     </div>
    )

      return (
        <div className='product_wrapper product_wrapper_search'>
          <div className='product_header'>
              <p>Extra 10% OFF</p>
              <button onClick={()=>{handleWishlist(prd);setHeart(!heart)}}>{heart ? <FaHeart style={{color:'#F58220'}}  /> : <FaRegHeart style={{color:'rgb(169, 169, 169)'}} />}</button>
          </div>
          <a href={`/product/${prd.brand}/${prd.name}`}>

            <img loading='lazy' src={prd.image} alt="Product Img"  onError={(e)=>onError(e)} />
            <div className='prd_info'>
              
              <p className='brand'>{prd.brand}</p>
              <p className='prd_name'>{prd.name}</p>
              {discount ? 
                <div className='prd_price_wrapper'>
                    <span className='prd_price '>{(Math.floor(prd.price_cal*0.9)).toLocaleString('en-US',{style:'currency', currency: "HKD"})}</span>
                    <span className='prd_price prd_price_discount'>{(prd.price_cal*1).toLocaleString('en-US',{style:'currency', currency: "HKD"})}</span>
                    
                </div> 
                
                :
                <span className='prd_price'>{(prd.price_cal*1).toLocaleString('en-US',{style:'currency', currency: "HKD"})}</span>
                }
                
            </div>
            </a>
            <div className='prd_end'>
              {discount && <div >{avg_score>0 ? StarRate(avg_score):StarRate(0)}</div>}
              {<button className='prd_btn' onClick={()=>addToCart(prd,1) }>add to cart</button>}
            </div>
        </div>
              
      )

}

export default ProductCard2