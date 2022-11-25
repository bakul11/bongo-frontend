import React from 'react';
import { useNavigate } from 'react-router-dom';

const PopularCart = ({ popular }) => {
    const { thubnail, _id } = popular;


    //Handle Play Details 
    const navigate = useNavigate();
    const handlePlayDetails = () => {
        navigate(`/watch/${_id}`)
    }


    return (
        <div className='col-lg-3 col-md-3 col-sm-6 col-12 onClick={handlePlayDetails}'>
            <img src={thubnail} alt="movie poster" className='img-fluid' style={{ borderRadius: '8px', cursor: 'pointer' }} onClick={handlePlayDetails} />
        </div>
    );
};

export default PopularCart;