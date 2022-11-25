import React from 'react';
import { useParams } from 'react-router-dom';

const LiveTVDetails = () => {
    const { name } = useParams();
    return (
        <div className='live-details text-center' style={{ marginTop: '100px' }}>
            <h5 className='text-light fs-1'>{name}</h5>
            <h6 className='text-secondary mt-2'>Our Live TV channel coming soon..</h6>
        </div>
    );
};

export default LiveTVDetails;