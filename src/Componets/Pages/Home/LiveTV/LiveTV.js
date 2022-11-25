import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import LiveTVCart from './LiveTVCart';


const liveTVData = [
    {
        logo: 'https://i.ibb.co/xmDS5v4/1-1.webp',
        name: 'Qtv'
    },
    {
        logo: 'https://i.ibb.co/sbS4LCh/1-2.webp',
        name: 'Ntv'
    },
    {
        logo: 'https://i.ibb.co/x8Wbj1p/1-3.webp',
        name: '71tv'
    },
    {
        logo: 'https://i.ibb.co/VTkQFRc/1-4.webp',
        name: 'ZEE Bangla'
    },
    {
        logo: 'https://i.ibb.co/ZSG5zmM/1-5.webp',
        name: 'Desh Tv'
    },
    {
        logo: 'https://i.ibb.co/vYhFf7C/1-6.webp',
        name: 'Independent'
    }
]






const LiveTV = () => {

    return (
        <div className='container-fluid mt-5'>
            <div className="main-title">
                <h3 className='text-light mb-2 fs-4'>Upcoming Live TV</h3>
                <div className="show-movie">
                    <>
                        <Swiper
                            slidesPerView={7}
                            spaceBetween={10}
                            centeredSlides={true}
                            loop={true}
                            autoplay={{
                                delay: 9000,
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
                                    slidesPerView: 8,
                                    spaceBetween: 6,
                                },
                            }}
                            navigation={true}
                            modules={[Autoplay, Navigation]}
                            className="mySwiper"
                        >

                            {
                                liveTVData.map(tv => <SwiperSlide><LiveTVCart tv={tv} key={tv?.name} /></SwiperSlide>)
                            }
                        </Swiper>
                    </>
                </div>
            </div>
        </div>
    );
};

export default LiveTV;