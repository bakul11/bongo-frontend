import React from 'react';
import BanglaNatok from '../Home/BanglaNatok/BanglaNatok';
import Jazz from '../Home/Jazz/Jazz';

const Drama = () => {
    return (
        <div className='movie' style={{ marginTop: '100px' }}>
            <BanglaNatok />
            <Jazz />
        </div>
    );
};

export default Drama;