import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';

import '../Styles/TopComponent.css'

import { EffectCards } from 'swiper/modules';

import style from "../Styles/TopComponent.module.css";
function TopComponent() {
  return (
    <div className={style.container}>
      <div>
        <h1>Quest Of The Curious</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
          libero eaque molestiae distinctio nobis vel temporibus provident error
          et facilis, magnam dicta possimus ab reprehenderit dolor dignissimos
          quidem earum odio a voluptas. Corporis ea minus suscipit facere cum,
          molestias voluptate sit praesentium laborum repellendus quia iusto
          harum architecto maxime perferendis!
        </p>
        <>
        <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      </>
      </div>
      <div>
        <h1>Hackonix</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
          libero eaque molestiae distinctio nobis vel temporibus provident error
          et facilis, magnam dicta possimus ab reprehenderit dolor dignissimos
          quidem earum odio a voluptas. Corporis ea minus suscipit facere cum,
          molestias voluptate sit praesentium laborum repellendus quia iusto
          harum architecto maxime perferendis!
        </p>
        <>
        <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      </>
      </div>
      <div>
        <h1>Colloquium</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
          libero eaque molestiae distinctio nobis vel temporibus provident error
          et facilis, magnam dicta possimus ab reprehenderit dolor dignissimos
          quidem earum odio a voluptas. Corporis ea minus suscipit facere cum,
          molestias voluptate sit praesentium laborum repellendus quia iusto
          harum architecto maxime perferendis!
        </p>
        <>
        <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      </>
      </div>
    </div>
  );
}

export default TopComponent;
