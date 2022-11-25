import React from 'react';
import './Footer.css'
import logo from '../../../images/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import android from '../../../images/android.webp'
import ios from '../../../images/iso.png'

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <section>
            <div className='footer-section'>
                <div className="container">
                    <div className="row gy-5">
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="footer-item">
                                <Link to='/'>
                                    <img src={logo} alt="footer logo" className='img-fluid' style={{ height: '40px' }} />
                                </Link>
                                <p className='text-light mt-3 mb-3'>Latest entertainment news and gossip from the world of bollywood, Hollywood and regional film industries. Get the latest celebrity news on celebrity</p>

                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-12 col-12">
                            <div className="footer-item">
                                <h3 className='text-light mb-3 fs-4'>Browse</h3>
                                <div className="fotMenu2">
                                    <li><Link to="#">Movies</Link></li>
                                    <li><Link to="#">Shows</Link></li>
                                    <li><Link to="#">TV</Link></li>
                                    <li><Link to="#">Drama</Link></li>
                                    <li><Link to="#">Boom</Link></li>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="footer-item">
                                <h3 className='text-light mb-3 fs-4'>Useful Link</h3>
                                <div className="fotMenu2">
                                    <li><Link to="#">Terms & Conditions</Link></li>
                                    <li><Link to="#">Open Source Agreements</Link></li>
                                    <li><Link to="#">FAQ</Link></li>
                                    <li><Link to="#">Privacy Policy</Link></li>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="footer-item">
                                <div className="footer-social">
                                    <h3 className='text-light mb-3 fs-4'>Follow Us</h3>
                                    <ul className='d-flex align-items-center justify-content-between w-50'>
                                        <li><Link to="#"><FontAwesomeIcon icon={faFacebook} className='text-light fs-4' /></Link></li>
                                        <li><Link to="#"><FontAwesomeIcon icon={faTwitter} className='text-light fs-4' /></Link></li>
                                        <li><Link to="#"><FontAwesomeIcon icon={faLinkedin} className='text-light fs-4' /></Link></li>
                                        <li><Link to="#"><FontAwesomeIcon icon={faInstagram} className='text-light fs-4' /></Link></li>
                                    </ul>
                                </div>
                                <div className="follow mt-3">
                                    <div className="android">
                                        <Link to="#" target="_blank"><img src={android} alt="android apps" className='img-fluid' style={{ width: '150px', height: '45px' }} /></Link>
                                    </div>
                                    <div className="iso mt-2">
                                        <Link to="#" target="_blank"><img src={ios} alt="IOS Logo" className='img-fluid' style={{ width: '150px', height: '45px' }} /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright text-center">
                    <p className='text-light'>©{date} Bongo. All rights reserved.</p>
                </div>
            </div>
        </section>
    );
};

export default Footer;