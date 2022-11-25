import React from 'react';
import { useNavigate } from 'react-router-dom';

const LiveTVCart = ({ tv }) => {
    const { logo, name } = tv;
    const navigate = useNavigate();
    const handleChannel = () => {
        navigate(`/liveTv/${name}`);
    }
    return (
        <div onClick={handleChannel} style={{ cursor: 'pointer' }}>
            <img src={logo} alt="channel logo" className='img-fluid rounded w-100' style={{ height: '100px' }} />
        </div>
    );
};

export default LiveTVCart;