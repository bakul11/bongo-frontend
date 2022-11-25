import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";


const JazzLoadding = () => {
    return (
        <div className="container-fluid">
            <>
                <Swiper
                    slidesPerView={7}
                    spaceBetween={10}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        280: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        540: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        991: {
                            slidesPerView: 6,
                            spaceBetween: 10,
                        },
                        1365: {
                            slidesPerView: 6,
                            spaceBetween: 10,
                        },
                    }}
                    navigation={true}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>  <Skeleton animation="wave" height={300} style={{ background: '#a1919145' }} /></SwiperSlide>
                    <SwiperSlide>  <Skeleton animation="wave" height={300} style={{ background: '#a1919145' }} /></SwiperSlide>
                    <SwiperSlide>  <Skeleton animation="wave" height={300} style={{ background: '#a1919145' }} /></SwiperSlide>
                </Swiper>
            </>
        </div>
    );
};

export default JazzLoadding;