import React, { useContext,  useRef, useState } from 'react'
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

import ProductCard2 from '../../Component/ProductCard2/ProductCard2'
import useBrand from '../../hook/useBrand'
import ProductSwipeTitle from '../../Component/ProductSwiperTitle/ProductSwipeTitle'

import 'react-loading-skeleton/dist/skeleton.css'
import { useQuery } from '@tanstack/react-query';


const ProductSwiper = ({opt,title,category}) => {
  const {getProduct} = useContext(ShopContext);


  const productQuery = useQuery({queryKey: ['productList'],queryFn: getProduct});
  const [_, setInit] = useState();




  const {brandList, filterBrand,filteredList, setFilterBrand} = useBrand({category})

  const prevRef = useRef(null);
  const nextRef = useRef(null);


return (
    <div className='ps_wrapper'>
      <ProductSwipeTitle opt={opt} title={title} category={category} filterBrand={filterBrand} brandList={brandList} setFilterBrand={setFilterBrand} />

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

            {(productQuery.isFetching ) && Array(5).fill(false).map((_)=>
            <SwiperSlide> <ProductCard2 prd={_} discount={true}/> </SwiperSlide>
            )}

            {filteredList?.slice(0,10).map( (prd)=>
            <SwiperSlide className='slide' key={prd.name+prd.brand}> <ProductCard2 prd={prd} discount={true}/> </SwiperSlide>
            )}

        </Swiper>
          
        <button ref={nextRef} className='swp_btn'><GrNext /></button>
      </div>

    </div>
  )
}


export default ProductSwiper