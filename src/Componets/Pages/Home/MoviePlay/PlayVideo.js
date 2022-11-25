import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Popular from '../Popular/Popular';
import { FacebookShareButton } from "react-share";
import { useDispatch, useSelector } from 'react-redux';
import movieSingleData from '../../../Redux/Actions/movieDetailsAction';
import { addToCart } from '../../../Redux/Actions/movFavAction';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';

const PlayVideo = () => {
    const [like, setLike] = useState(false);
    const { id } = useParams();
    const { movieId } = useSelector(state => state.movieDetailsReducer.movie)
    const { loadding } = useSelector(state => state.movieDetailsReducer)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieSingleData(id))
    }, [dispatch, id])

    const navigate = useNavigate();

    const handleAdd = () => {
        dispatch(addToCart(id));
        toast.success('Item add successfully done');
        navigate('/cart')
    }

    return (
        <section className='play-sec' style={{ marginTop: '80px' }}>
            {
                loadding ? <>
                    <div className="play-spinner d-flex justify-content-center" style={{ marginTop: '120px' }}>
                        <div class="spinner-grow text-primary" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-grow text-secondary" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-grow text-success" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-grow text-danger" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-grow text-warning" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <div class="spinner-grow text-info" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </> :
                    <div className="play-section container">
                        <div className="youtube-payer">
                            <iframe className='rounded w-100' src={`https://www.youtube.com/embed/${movieId?.videoID}`} style={{ height: '500px' }} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className="row">
                            <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                                <div className="play-title-sec mt-3">
                                    <h4 className='text-light text-capitalize'>{movieId?.title}</h4>
                                    <h5 className='text-secondary fs-6 pt-2 pb-2'>Duration : {movieId?.duration}</h5>
                                    <p className='text-secondary'>{movieId?.des}</p>
                                </div>
                                <div className="Starring mt-3">
                                    <h6 className='text-light mb-5 fs-5'>Stating :</h6>
                                    <div className="actor d-flex align-items-center">
                                        <div className="logo-hero me-5 text-center">
                                            <img src={movieId?.heroPhoto} className='img-fluid rounded-pill' alt="actor" style={{ height: '50px', width: '50px' }} />
                                            <p className='text-light text-capitalize'>{movieId?.heroName}</p>
                                        </div>
                                        <div className="logo-hero text-center">
                                            <img src={movieId?.heroinPhoto} className='img-fluid rounded-pill' alt="actor" style={{ height: '50px', width: '50px' }} />
                                            <p className='text-light text-capitalize'>{movieId?.heroinName}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                <div className="play-title-sec mt-3">
                                    <div className="favorite-sec mb-5">
                                        <button className="btn text-secondary" onClick={handleAdd}>+ My list</button>
                                        <button className="btn text-secondary"><FontAwesomeIcon icon={faShareAlt} className='me-2' />
                                            <FacebookShareButton url={`https://www.youtube.com/watch?v=${movieId?.videoID}`}>
                                                Share
                                            </FacebookShareButton>
                                        </button>
                                    </div>
                                    <h4 className='text-secondary text-capitalize fs-6 mb-3'>Genres : Drama, Thriller,Romance </h4>
                                    <h4 className='text-light text-capitalize fs-6 mb-3'>Director :</h4>
                                    <img src={movieId?.directorPhoto} className='img-fluid rounded-pill' alt="actor" style={{ height: '50px', width: '50px' }} />
                                    <p className='text-light text-capitalize'>{movieId?.directorName}</p>
                                </div>
                            </div>
                        </div>
                    </div>
            }
            {/* =======More like this========= */}
            <Popular />
        </section>
    );
};

export default PlayVideo;