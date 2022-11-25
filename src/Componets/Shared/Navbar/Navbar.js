import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import useActiveUser from '../../../Hooks/useActiveUser';
import logo from '../../../images/logo.svg'
import './Navbar.css'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [user] = useActiveUser();
    const navigate = useNavigate();
    const { cart } = useSelector(state => state.movieFavReducer);

    //Handle Logout
    const handleLogout = () => {
        toast.success('Logout success!');
        localStorage.removeItem('token');
        navigate('/')
    }



    return (
        <section>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top main-meubar">
                <div className="container">
                    <Link className="navbar-brand" to="/"><img src={logo} alt="Website Logo" className='img-fluid' style={{ height: '30px' }} /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav customMenu">
                            <li className="nav-item">
                                <NavLink className="nav-link " to="/movies">MOVIES</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " to="/popular">POPULAR</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " to="/natok">NATOK</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " to="/drama">DRAMA</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " to="/premium">PREMIUM</NavLink>
                            </li>
                        </ul>
                        <div className="login-profile justify-content-end">
                            {
                                user?.email ? <>
                                    <li className="nav-item dropdown" style={{ listStyle: 'none' }}>
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <img src={user?.profile} alt={user?.userName} className='img-fluid rounded-pill' style={{ height: '40px', width: '40px' }} />
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><NavLink className="dropdown-item" to="/profile">Profile</NavLink></li>
                                            <hr />
                                            <li><button className="btn" onClick={handleLogout}>Logout</button></li>
                                        </ul>
                                    </li>
                                </> : <NavLink className="nav-link btn btn-danger text-light" aria-current="page" to="/login">Login</NavLink>
                            }

                        </div>
                        <div className="cart">
                            {
                                cart?.length === 0 ? "" :
                                    <NavLink className="nav-link text-light ms-4" to="/cart">
                                        <button type="button" class="bg-danger position-relative border-0 rounded">
                                            <FontAwesomeIcon icon={faPlayCircle} className='text-light' />
                                            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                                {cart?.length}
                                                <span class="visually-hidden">unread messages</span>
                                            </span>
                                        </button>
                                    </NavLink>
                            }
                        </div>
                    </div>

                </div>
            </nav>
            <ToastContainer />
        </section>
    );
};

export default Navbar;