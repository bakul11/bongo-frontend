import axios from "axios";

export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'


//add to cart
export const addToCart = (id) => async (dispatch) => {
    const { data } = await axios.get(`https://bongo-movie.onrender.com/bongo/getSingleMedia/${id}`);

    const data2 = data?.movieId;
    dispatch({
        type: ADD_TO_CART,
        payload: { data2 }
    })
}

// remove form cart 
export const removeFormCart = (id) => async (dispatch) => {
    dispatch({
        type: REMOVE_FROM_CART,
        payload: id
    })
}