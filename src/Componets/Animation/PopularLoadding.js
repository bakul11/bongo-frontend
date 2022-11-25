import Skeleton from '@mui/material/Skeleton';
import React from 'react';

const PopularLoadding = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                    <Skeleton animation="wave" height={300} style={{ background: '#a1919145' }} />
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                    <Skeleton animation="wave" height={300} style={{ background: '#a1919145' }} />
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                    <Skeleton animation="wave" height={300} style={{ background: '#a1919145' }} />
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                    <Skeleton animation="wave" height={300} style={{ background: '#a1919145' }} />
                </div>
            </div>
        </div>
    );
};

export default PopularLoadding;