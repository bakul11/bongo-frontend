import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import PopularLoadding from '../../../Animation/PopularLoadding';
import PopularCart from './PopularCart';

const Popular = () => {
    const [movie, setMovie] = useState([]);
    const [loadding, setLoadding] = useState(true);

    useEffect(() => {
        fetch('https://bongo-movie.onrender.com/bongo/getPopularMedia', {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data?.success) {
                    setMovie(data?.popular)
                }
                setLoadding(false);

            })
            .catch(err => {
                setLoadding(true);
            })
    }, [movie])


    return (
        <div className='container mt-5'>
            <h6 className='text-light'>More Like This</h6>
            <div className="cutomDiv mb-3">
                <div className="line bg-danger mt-1" style={{ height: '2px', width: '120px' }}></div>
            </div>
            <div className="popular">
                <div className="row gy-5">
                    {
                        loadding ?
                            <>
                                <PopularLoadding />
                            </>
                            :
                            movie?.map(movie => <PopularCart popular={movie} key={movie?._id} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Popular;