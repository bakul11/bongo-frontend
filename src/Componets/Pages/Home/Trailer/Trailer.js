import React from 'react';


const Trailer = () => {
    return (
        <div className='container-fluid trailer-sec mt-5 mb-5'>
            <div className="row gy-5">
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="trailer-item">
                        <div className="trailer-yuotube">
                            <iframe className='video w-100' src="https://www.youtube.com/embed/133ou15NEDI" style={{ height: '360px', borderRadius: '10px' }} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="trailer-item">
                        <h3 className='text-light fw-bold fs-1'>Beauty Tailors <br />- Trailer</h3>
                        <h6 className='text-secondary mt-3 mb-3'>Promotion</h6>
                        <p className='text-light mb-2'>Presenting Trailer of Bongo Original Series "Beauty Tailors - বিউটি টেইলার্স" directed by Atiq Zaman and starring Hasan Masood, Mostafizur Noor Imran, Taufiqul Hasan Nihal and more</p>
                        <p className='text-light mb-2'>ঘাত-সংঘাত,প্রেম, প্রতিটি ভালোবাসায় রয়েছে পাওয়া না পাওয়ার এক নিজস্ব গল্প। এই গল্প বিউটি ও তার আশেপাশের সকলের। আসছে "বিউটি টেইলার্স" আগামী ১৫ জুলাই। চোখ রাখুন শুধুমাত্র Bongo-তে!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trailer;