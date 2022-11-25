import React from 'react';
import ScrollTop from '../../ScrollTop/ScrollTop';
import BanglaNatok from './BanglaNatok/BanglaNatok';
import DabbingMovie from './DabbingMovie/DabbingMovie';
import HeroBanner from './HeroBanner/HeroBanner';
import Jazz from './Jazz/Jazz';
import LiveTV from './LiveTV/LiveTV';
import MostPopular from './MostPopular/MostPopular';
import Trailer from './Trailer/Trailer';

const Home = () => {
    return (
        <div className='home-section'>
            <HeroBanner />
            <div className='ps-3 pe-3'>
                <LiveTV />
                <DabbingMovie />
                <BanglaNatok />
                <Jazz />
                <Trailer />
                <MostPopular />
                <ScrollTop />
            </div>
        </div>
    );
};

export default Home;