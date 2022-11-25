import React from 'react';
import { useNavigate } from 'react-router-dom';

const MoviePlay = ({ singleMovie }) => {
    const { thubnail, _id } = singleMovie;

    //Handle Play Details 
    const navigate = useNavigate();
    const handlePlayDetails = () => {
        navigate(`/watch/${_id}`)
    }

    const playPhoto = {
        height: '265px',
        // width: '175px',
        borderRadius: '7px',
        cursor: 'pointer'
    }

    return (
        <div className='sec-play' onClick={handlePlayDetails}>
            <img src={thubnail} alt="thubnail " className='img-fluid' onClick={handlePlayDetails} style={playPhoto} />
        </div>
    );
};

export default MoviePlay;