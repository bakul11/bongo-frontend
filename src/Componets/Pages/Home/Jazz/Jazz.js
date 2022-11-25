import React, { useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Navigation } from "swiper";
import MoviePlay from '../MoviePlay/MoviePlay';
import loadJazzMovie from '../../../Redux/Actions/jazzMovieAction';
import { useDispatch, useSelector } from 'react-redux';
import JazzLoadding from '../../../Animation/JazzLoadding';



const Jazz = () => {
    const { movie, loadding } = useSelector(state => state.jazzMovieReducer);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadJazzMovie())
    }, [dispatch])



    return (
        <div className='container-fluid mt-4'>
            <div className="main-title">
                <h3 className='text-light mb-2 fs-4'>Jazz's Movies</h3>
                <div className="show-movie">
                    <>
                        <Swiper
                            slidesPerView={7}
                            spaceBetween={10}
                            centeredSlides={true}
                            loop={true}
                            autoplay={{
                                delay: 2000,
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

                            {
                                movie.jazz?.map(singleMovie => <SwiperSlide><MoviePlay singleMovie={singleMovie} key={singleMovie?._id} /></SwiperSlide>)
                            }
                        </Swiper>
                    </>
                    <div className="lodding">
                        {
                            loadding ? <>
                                <JazzLoadding />
                            </> : ""
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jazz;