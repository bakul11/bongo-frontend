import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const HeroBanner = () => {
    return (
        <div className="hero-secction" style={{ marginTop: '56px' }}>
            <>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src="https://i.ibb.co/7NtHjK1/1.webp" alt="slide logo" className="img-fluid" style={{ height: '500px' }} /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/Nt4L9QQ/8ebcd485-14ec-4819-979d-7a14d9239a75.webp" alt="slide logo" className="img-fluid" style={{ height: '500px' }} /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/gvFwrBW/a59b418b-ba5b-48d3-a2d6-ae46f6a96c17.webp" alt="slide logo" className="img-fluid" style={{ height: '500px' }} /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/Ltvt7ts/2.webp" alt="slide logo" className="img-fluid" style={{ height: '500px' }} /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/GFVx4BM/3.webp" alt="slide logo" className="img-fluid" style={{ height: '500px' }} /></SwiperSlide>
                    <SwiperSlide><img src="https://i.ibb.co/yykJb0G/4.webp" alt="slide logo" className="img-fluid" style={{ height: '500px' }} /></SwiperSlide>
                </Swiper>
            </>
        </div>
    );
};

export default HeroBanner;