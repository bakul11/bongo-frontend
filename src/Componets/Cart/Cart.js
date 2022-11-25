import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const Cart = () => {
    const { cart } = useSelector(state => state.movieFavReducer)

    return (
        <section style={{ marginTop: '150px' }}>
            {
                cart?.length === 0 ?
                    <>
                        <div className="sec-cart text-center">
                            <FontAwesomeIcon icon={faTrashAlt} size='4x' className='text-danger' />
                            <h5 className='text-light mb-5  mt-2'>Your Favourite List is Empty</h5>
                        </div>
                    </>
                    : <div className='container' style={{ marginTop: '100px' }}>
                        <h5 className='text-light mb-5'>Your Favourite List total : {cart?.length} items</h5>

                        <div className="row gy-5">
                            {
                                cart?.map(item => <CartItem item={item} key={item?._id} />)
                            }
                        </div>
                    </div>
            }
        </section>
    );
};

export default Cart;