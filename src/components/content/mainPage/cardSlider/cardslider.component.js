import './cardslider.component.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Pagination } from "swiper";
import "swiper/css/navigation";
import 'swiper/css';

import CarCard from '../carcard/carcard.component';
export default function CardSlider(){
    return(
        <div>
        <Swiper
            slidesPerView={3}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide><CarCard /></SwiperSlide>
            <SwiperSlide><CarCard /></SwiperSlide>
            <SwiperSlide><CarCard /></SwiperSlide>
            <SwiperSlide><CarCard /></SwiperSlide>
            <SwiperSlide><CarCard /></SwiperSlide>
            <SwiperSlide><CarCard /></SwiperSlide>
            <SwiperSlide><CarCard /></SwiperSlide>
            <SwiperSlide><CarCard /></SwiperSlide>
            <SwiperSlide><CarCard /></SwiperSlide>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </Swiper>
          </div>
    )
}