import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import { useNavigate, useParams } from 'react-router-dom'
import {FaStar} from 'react-icons/fa'
import './ProductDetails.css'
import prd1 from '../../assests/prd1.png'
import ReviewRecord from '../../Review/ReviewRecord'
import Review from '../../Review/Review'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useQuery } from '@tanstack/react-query'

const ProductDetails = () => {

    const {addToCart, reviewRecord,getAvgScore, getProduct} = useContext(ShopContext)

    const productQuery = useQuery({queryKey: ['productList'],queryFn: getProduct});
    const productList = productQuery.data

    const [filteredProduct, setFilteredProduct] = useState([]);
    const [filteredList, setFilteredList] = useState([])
    const [quantity, setQuantity] = useState(1)
    const [showAll, setShowAll] = useState(false)

    let navigate = useNavigate()

    let {brand, product} = useParams()

    productList?.map((prd)=>{

        prd.search = prd.category + prd.brand
        prd.search_name = (prd.brand +' '+ prd.name).toLowerCase()
        prd.price_cal = prd.price.replace('.00','')
    })

//    console.log(filteredProduct[0].id)

    const [loading , setLoading] = useState(false)
    useEffect(()=>{
        setTimeout(() => {
            setLoading(true)
        }, 1000);

    },[])



    useEffect(()=>{

        if(productList){
        setFilteredProduct(productList.filter((prd)=>prd.search_name.toLowerCase().replace('-',' ').indexOf((brand+" "+product).toLowerCase().replace('-',' '))!==-1))
        setFilteredList(productList.filter((prd)=>prd.name.toLowerCase().replace('-',' ').indexOf(product.toLowerCase().replace('-',' '))!==-1))
        console.log(filteredList)
        }
    },[productList])

    console.log(product.toLowerCase().replace('-',' '))
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

  return ((filteredProduct.length!==0 ) ?
    <div>
    <div className='product_main_wrapper'>
        <div className='product_image_wrapper'>
            <div className='product_image_nav'>
                <img src={filteredProduct[0].image} alt="Product Img" onError={(e)=>onError(e)}/>
            </div>
            <div className='product_image'>
                <img src={filteredProduct[0].image} alt="Product Img"onError={(e)=>onError(e)} />
            </div>
        </div>

        <div className='product_describe'>
            <a href={`/collection/brand/${filteredProduct[0].brand}`}>{filteredProduct[0].brand}</a>
            <h1>{filteredProduct[0].name}</h1>
            <div className='product_describe_price'>
                <span>{(filteredProduct[0].price_cal*1).toLocaleString('en-US',{style:'currency', currency: "HKD"})}</span>
                <h5>Shipping calculated at checkout.</h5>
            </div>
            <div className='product_describe_review'>{StarRate(getAvgScore(reviewRecord?.filter((record)=>record.product_id===filteredProduct[0].id)))}</div>
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
                    {filteredList.map((item)=>
                        <a key={item.brand} className={item.brand.toLowerCase()===brand.toLowerCase().replace('-',' ') ? 'brand_active':''} 
                        href={`/product/${item.brand.toLowerCase().replace(' ','-')}/${product}`}
                        >{item.brand}</a>
                    )}
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
            <Review product_id={filteredProduct[0].id} product={true}/>
        </div>
    </div>
    </div>

    :

    <div>
    <div className='product_main_wrapper'>
        <div className='product_image_wrapper'>
            <div className='product_image_nav'>
                <Skeleton />
                
            </div>
            <div className='product_image'>
                <Skeleton containerClassName='flex-1'/>
            </div>
        </div>

        <div className='product_describe'>
            <Skeleton count={2}/>
            
            <div className='product_describe_price'>
                <Skeleton />
            </div>
            <div className='product_describe_review'><Skeleton /></div>
            <div className={showAll ? 'product_describe_details_more':'product_describe_details_less'}>
                <Skeleton count={5}/>
            </div>
            <h2 onClick={()=>setShowAll(!showAll)}>{showAll ? 'Show less':'Show more'}</h2>
            <div>
                <Skeleton />
                <div className='product_describe_brand'>
                    <Skeleton />
                </div>
            </div>
            <div className='product_describe_cart'>
                
                <Skeleton />
            </div>


        </div>

    </div>
    </div>
  )
}

export default ProductDetails