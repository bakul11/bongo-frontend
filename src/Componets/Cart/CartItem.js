import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { removeFormCart } from '../Redux/Actions/movFavAction';

const CartItem = ({ item }) => {
    const { title, thubnail, directorName, duration, _id } = item.data2;

    const dispatch = useDispatch()

    //Handle Remove Cart 
    const handleRemoveItem = () => {
        dispatch(removeFormCart(_id));
        toast.success('Item remove successfully done');
    }

    return (
        <div className='col-lg-8'>
            <div className="shadow-lg d-flex align-items-center flex-wrap rounded p-2 justify-content-between">
                <div className="cart-logo">
                    <img src={thubnail} alt="logo" className='img-fluid rounded' style={{ height: '150px', width: '200px' }} />
                </div>
                <div className="cart-details mt-2">
                    <h6 className='text-light'>Movie Name : {title}</h6>
                    <p className='text-secondary text-capitalize'>Director : {directorName}</p>
                    <p className='text-secondary'>Duration : {duration}</p>
                </div>
                <div className="close mt-2">
                    <FontAwesomeIcon icon={faTrashAlt} size='4x' className='text-danger' style={{ cursor: 'pointer' }} onClick={handleRemoveItem} />
                </div>
            </div>
        </div>
    );
};

export default CartItem;