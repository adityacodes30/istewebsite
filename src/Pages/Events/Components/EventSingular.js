import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../Styles/EventSingular.css"


// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function App(props) {
    const images = props.image;
    console.log(images);
    return (
        
        <>
        <div>
            <h1 className="Heading">EVENTS</h1>
        </div>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                spaceBetween={200} 
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={__dirname+images[2]}  alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={__dirname+images[1]} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={__dirname+images[0]} alt=""/>
                </SwiperSlide>
            </Swiper>
        </>
    );
}










