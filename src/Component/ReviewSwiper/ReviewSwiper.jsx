import React, { useContext, useRef, useState } from 'react'
import { Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import {GrPrevious,GrNext} from 'react-icons/gr'


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import ReviewCard from '../ReviewRecord/ReviewCard';
import { ShopContext } from '../../Context/ShopContext';

import './ReviewSwiper.css'
import StarRate_static from '../StarRate_static';
import { useQuery } from '@tanstack/react-query';

const ReviewSwiper = () => {

    const { getAvgScore, getReview} = useContext(ShopContext)
    const [_, setInit] = useState();
    const reviewQuery = useQuery({queryKey: ['review'],queryFn: getReview});

    const reviewRecord = reviewQuery.data
  console.log(reviewQuery)
    const reviewRecord_filter = reviewRecord && reviewRecord.filter((record)=>record.product_id===0)

    const prevRef = useRef(null);
    const nextRef = useRef(null);

  return (

    <div className='review_swiper_outer_wrapper'>
        <div className='review_swiper_top'>
            <div className='review_swiper_title'>
                <p>What customers are saying</p>
                <a href="/review">See all reviews</a>
            </div>
            <div className='review_swiper_btn'>
                <StarRate_static rating={getAvgScore(reviewRecord_filter)}/>
                <h1>{reviewRecord_filter?.length} Reviews</h1>
                <button ref={prevRef} className='swp_btn'><GrPrevious /></button>
                <button ref={nextRef} className='swp_btn'><GrNext /></button>
            </div>
        </div>
        
    <div className=' review_swiper_wrapper'>
        <div className='swipe_wrapper2'>
        
          <Swiper className='container'
          modules={[Navigation]}

          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}

          spaceBetween={10}
          slidesPerView={3}
          breakpoints={{

            1000:{slidesPerView:3},
            530:{slidesPerView:2},
            0:{slidesPerView:1}
        }}
          onInit={() => setInit(true)}
          >

            {reviewRecord && reviewRecord_filter.map(
              (record)=><SwiperSlide className='slide' key={record.id}> <ReviewCard reviewRecord={record}/> </SwiperSlide>
              )}

          </Swiper>
          
            
        </div>
    </div>
    </div>
    
    
  )
}

export default ReviewSwiper