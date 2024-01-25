import React, { useContext, useEffect, useRef, useState } from 'react'
import './ProductSwiper.css'
import {ShopContext} from '../../Context/ShopContext'

import {GrPrevious,GrNext} from 'react-icons/gr'

import { Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

import ProductCard2 from '../../Component/ProductCard2'
import useBrand from '../../hook/useBrand'
import ProductSwipeTitle from '../../Component/ProductSwipeTitle'
import prd_img from '../../mysql_data/productLinks.json'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


const ProductSwiper = ({opt,title,category}) => {
//productList,
  const {productList,getProduct} = useContext(ShopContext);
  //const productList = productQuery.data
  //console.log(productQuery)
  //console.log(productList)
  axios.defaults.withCredentials = true;
/*
  const getProduct =  ()=>{    
    return axios.get(process.env.REACT_APP_API_URL + "/api/get")
    .then((response)=>{
       const result = response.data.map((item)=>{
        const str = item.brand + ' ' + item.name
        item.image = prd_img[str]
      })
      console.log(result)
      console.log(response.data)
      console.log('caching')
      //setProductList(response.data)
      return response.data
    })

  }
*/
  const productQuery = useQuery({queryKey: ['productList'],queryFn: getProduct});
  console.log(productQuery.data)
  const [_, setInit] = useState();

  const [loading , setLoading] = useState(false)
  useEffect(()=>{
      setTimeout(() => {
          setLoading(true)
      }, 1000);

  },[])
//  const [brandList , setBrandList] = useState();
//  const [filterBrand, setFilterBrand] = useState('');

  const {brandList, filterBrand,filteredList, setFilterBrand} = useBrand({category})

  const prevRef = useRef(null);
  const nextRef = useRef(null);
/*
  let filteredList = productList.filter((prd)=>prd.category.toLowerCase().indexOf(category.toLowerCase())!==-1)

  filteredList = filteredList.filter((prd)=>prd.brand.toLowerCase().indexOf(filterBrand.toLowerCase())!==-1)



  useEffect(() =>{
    let set = new Set()


    filteredList.map((prd)=>set.add(prd.brand))
    
    setBrandList([...set])
    console.log('cate: '+ brandList)

  },[productList])
*/
//  console.log(filterBrand)

/*

  const StarRate = (rating)=> {
    const array = [1,2,3,4,5];

    return(
    <div>
      { array.map((num)=><FaStar key={num} color={(rating) >= num ? '#f58220' : 'a9a9a9'}/>)}
    </div>
    )
  }

  const ProductCard = ({prd})=> {

    productList.map((prd)=>{

      prd.price_cal = prd.price.replace('.00','')
  })

    const matchImg = (item)=> {
      const str = item.brand + ' ' + item.name
      return prd_img[str]

    }

    function onError(e) {
      e.target.onerror = null;
      e.target.src = prd1;
      
    }


    return (
      <div className='product_wrapper'>
          <a href={`/product/${prd.brand}/${prd.name}`}>
          <img src={prd.image} alt="Product Img"  onError={(e)=>onError(e)} />
          <div className='prd_info'>
            <p className='brand'>{prd.brand}</p>
            <p className='prd_name'>{prd.name}</p>
            <div className='prd_price_wrapper'>
              <span className='prd_price '>{(Math.floor(prd.price_cal*0.9)).toLocaleString('en-US',{style:'currency', currency: "HKD"})}</span>
              <span className='prd_price prd_price_discount'>{(prd.price_cal*1).toLocaleString('en-US',{style:'currency', currency: "HKD"})}</span>
            </div>
            <p className='prd_rating'>{StarRate(5)}</p>
          </div>
          </a>
      </div>
    )

  }
*/
  //if(productQuery.isFetching) return(<div>loading</div>)


return (
    <div className='ps_wrapper'>
      <ProductSwipeTitle opt={opt} title={title} category={category} filterBrand={filterBrand} brandList={brandList} setFilterBrand={setFilterBrand} />
      {/*
        {opt ? <h2>{title}</h2>:
          <div className='no_opt'> 
            <h2>{title}</h2>  
            <p><a href={`/collection/${category}`}>View All</a></p>
          </div>
          }


        {opt ? 

        
        <div className='ps_btn_wrapper'>
            <div className='ps_btn_option'>
              <p onClick={()=>setFilterBrand('')} className={filterBrand==='' && 'category_active'}>All</p>
              { brandList && brandList.slice(0,5).map((brand,i)=>{

               return filterBrand===brandList[i] ? <p key={i} onClick={()=>setFilterBrand(brand)} className='category_active' >{brand}</p> : 
               <p key={i} onClick={()=>setFilterBrand(brand)} >{brand}</p>
              }) }

            </div>
      
          <a href={`/collection/${category}`}>View All</a>
        </div>

        
:        <div></div>}
*/}



        <div className='swipe_wrapper'>
        <button ref={prevRef} className='swp_btn'><GrPrevious /></button>
          <Swiper className='container'
          modules={[Navigation]}

          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}

          spaceBetween={10}
          slidesPerView={5}
          breakpoints={{

            1000:{slidesPerView:5},
            916:{slidesPerView:4},
            530:{slidesPerView:3},
            0:{slidesPerView:2}
        }}
          onInit={() => setInit(true)}
          >
            {/*<SwiperSlide >
              
            <div style={ {border: '1px solid rgba(211, 214, 217, 1)', borderRadius:'20px', padding:'10px'}}>
              <Skeleton containerClassName="flex-1" height={'cal(20vh)'}/> 
              <Skeleton containerClassName="flex-1" height={48+48+36+72-20}/> 
             </div>

          
      </SwiperSlide>*/}

            {(productQuery.isFetching ) && Array(5).fill(false).map((_)=>
            <SwiperSlide> 
              <ProductCard2 prd={_} discount={true}/> 
    </SwiperSlide>)}
            {filteredList?.slice(0,10).map(
              (prd)=><SwiperSlide className='slide' key={prd.name+prd.brand}> <ProductCard2 prd={prd} discount={true}/> </SwiperSlide>
              )}

          </Swiper>
          
            <button ref={nextRef} className='swp_btn'><GrNext /></button>
        </div>


    </div>
  )
}
/*
          navigation={{
            nextEl: '.review-swiper-button-next',
            prevEl: '.review-swiper-button-prev',
          }} 
            {sample.map((s)=><SwiperSlide className='slide'> <ProductCard prd={s}/> </SwiperSlide>)}
            {sample.map((s)=><SwiperSlide className='slide'> <ProductCard prd={s}/> </SwiperSlide>)}
            {sample.map((s)=><SwiperSlide className='slide'> <ProductCard prd={s}/> </SwiperSlide>)}
          <button>{'<'}</button>
          <div className='product_swiper'>
            <ProductCard/>
            
          </div>
          <button>{'>'}</button>


                  <div className='ps_btn_wrapper'>
            <div className='ps_btn_option'>
              <p>For Dogs</p>
              <p>For Cats</p>
            </div>
      
          <a href="">View All</a>
        </div>

                  <h2>{title}</h2>

  const ProductCard = ()=> {
    return (
      <div className='product_wrapper'>
          <img src={prd1} alt="Product One" />
          <div className='prd_info'>
            <p className='brand'>Orijen</p>
            <p className='prd_name'>Original Recipe Chicken & Turkey Adult Dog Dry Food (USA)</p>
            <span className='prd_price'>HK$290.00</span>
            <p className='prd_rating'>{StarRate(5)}</p>
            <button onClick={()=>addToCart(' hi')}>Add to Cart</button>
          </div>
      </div>
    )

  }

*/

export default ProductSwiper