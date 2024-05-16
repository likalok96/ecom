import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import { useParams } from 'react-router-dom'
import {FaStar} from 'react-icons/fa'
import './ProductDetails.css'
import prd1 from '../../assests/prd1.png'
import Review from '../Review/Review'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useQuery } from '@tanstack/react-query'
import prd_img from '../../utils/data/productLinks.json'


const ProductDetails = () => {

    const {addToCart, getReview,getAvgScore, getProduct} = useContext(ShopContext)

    const productQuery = useQuery({queryKey: ['productList'],queryFn: getProduct});
    const productList = productQuery.data

    const reviewQuery = useQuery({queryKey: ['review'],queryFn: getReview});
    const reviewRecord = reviewQuery.data

    const [filteredProduct, setFilteredProduct] = useState([]);
    const [filteredList, setFilteredList] = useState([])
    const [quantity, setQuantity] = useState(1)
    const [showAll, setShowAll] = useState(false)


    let {brand, product} = useParams()

    let str = brand + ' ' + product

    productList?.forEach((prd)=>{

        prd.search = prd.category + prd.brand
        prd.search_name = (prd.brand +' '+ prd.name).toLowerCase()
        prd.price_cal = prd.price.replace('.00','')
    })

    useEffect(()=>{

        if(productList){
        setFilteredProduct(productList.filter((prd)=>prd.search_name.toLowerCase().indexOf((brand+" "+product).toLowerCase())!==-1))
        setFilteredList(productList.filter((prd)=>prd.name.toLowerCase().indexOf(product.toLowerCase())!==-1))
        console.log(filteredList)
        }
    },[productList,brand,filteredList,product])

    console.log(product.toLowerCase())
    console.log(filteredList)

    const StarRate = (rating)=> {
        const array = [1,2,3,4,5];
    
        return(
        <div>
          { array.map((num)=><FaStar key={num} color={(rating) >= num ? '#f58220' : 'a9a9a9'}/>)}
        </div>
        )
      }

    function onError(e) {
    e.target.onerror = null;
    e.target.src = prd1;
    
    }
//(filteredProduct.length!==0 ) ? filteredProduct[0].image : prd1 
  return (
    <div>
    <div className='product_main_wrapper'>
        <div className='product_image_wrapper'>
            <div className='product_image_nav'>
                <img loading='lazy' src={prd_img[str]} alt="Product Img" onError={(e)=>onError(e)}/>
            </div>
            <div className='product_image'>
                <img loading='lazy' src={prd_img[str]} alt="Product Img"onError={(e)=>onError(e)} />
            </div>
        </div>

        <div className='product_describe'>
            <a href={`/collection/brand/${brand}`}>{brand}</a>
            <h1>{product}</h1>
            <div className='product_describe_price'>
                <span>{((filteredProduct.length!==0 ) ? filteredProduct[0].price_cal*1 : 0).toLocaleString('en-US',{style:'currency', currency: "HKD"})}</span>
                <h5>Shipping calculated at checkout.</h5>
            </div>
            <div className='product_describe_review'>{StarRate(getAvgScore(reviewRecord?.filter((record)=>record.product_id===filteredProduct[0]?.id)))}</div>
            <div className={showAll ? 'product_describe_details_more':'product_describe_details_less'}>
                <p>discribe</p>
                <p>discribe</p>
                <p>discribe</p>
                <p>discribe</p>
                <p>discribe</p>
            </div>
            <h2 onClick={()=>setShowAll(!showAll)}>{showAll ? 'Show less':'Show more'}</h2>
            <div>
                <p>Brand</p>
                <div className='product_describe_brand'>
                    {(filteredProduct.length!==0 ) ? filteredList.map((item)=>
                        <a key={item.brand} className={item.brand.toLowerCase()===brand.toLowerCase() ? 'brand_active':''} 
                        href={`/product/${item.brand}/${product}`}
                        >{item.brand}</a>
                    )
                    :
                    <a key={brand} className={'brand_active'} 
                    href={`/product/${brand}/${product}`}
                    >{brand}</a>}
                </div>
            </div>
            <div className='product_describe_cart'>
                <div className='product_describe_cart_quan'>
                    <p onClick={()=>setQuantity((prev)=>prev>1?prev-1:prev)}>-</p>
                    <div>{quantity}</div>
                    <p onClick={()=>setQuantity((prev)=>prev+1)}>+</p>
                </div>
                <button onClick={()=>addToCart(filteredProduct[0],quantity)}>Add to Cart</button>
            </div>


        </div>

    </div>
    <div className='review_outer_wrapper'>
        <div className='review_wrapper'>
            {(filteredProduct.length!==0 ) ? <Review product_id={filteredProduct[0].id} product={true}/> : <Skeleton height={500}/>}
        </div>
    </div>
    </div>


  )
}


export default ProductDetails