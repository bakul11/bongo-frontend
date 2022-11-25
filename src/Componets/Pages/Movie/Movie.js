import React from 'react';
import DabbingMovie from '../Home/DabbingMovie/DabbingMovie';
import Jazz from '../Home/Jazz/Jazz';

const Movie = () => {
    return (
        <div className='movie' style={{ marginTop: '100px' }}>
            <DabbingMovie />
            <Jazz />
        </div>
    );
};

export default Movie;