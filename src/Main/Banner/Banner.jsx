import React from 'react'
import './Banner.css'

import { Pagination,Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

import img1 from '../../assests/8qtzunfh.png'
import img2 from '../../assests/f3kmofsn.png'
import img3 from '../../assests/k466qj3p.png'

const Banner = ({quan}) => {
  return (
    <div className='banner_wrapper'>
        <Swiper className='container'
        modules={[Pagination,Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true}}
        autoplay={{delay: 1000, disableOnInteraction: false }}
        >
            <SwiperSlide key='1'>
                <img src={img1} alt="Avater One" />
            </SwiperSlide>
            <SwiperSlide key='2'>
                <img src={img2} alt="Avater One" />
            </SwiperSlide>
            <SwiperSlide key='3'>
                <img src={img3} alt="Avater One" />
            </SwiperSlide>
            


        </Swiper>
    </div>
    )
}

export default Banner