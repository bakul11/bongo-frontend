import axios from "axios";

export const MOVIE_DETAILS_REQ = "MOVIE_DETAILS_REQ";
export const MOVIE_DETAILS_SUCCESS = "MOVIE_DETAILS_SUCCESS";
export const MOVIE_DETAILS_FAIL = "MOVIE_DETAILS_FAIL";


const movieSingleData = (id) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: MOVIE_DETAILS_REQ,
            })
            //movie details 
            const res = await axios.get(`https://bongo-movie.onrender.com/bongo/getSingleMedia/${id}`);

            dispatch({
                type: MOVIE_DETAILS_SUCCESS,
                payload: res.data
            })

        } catch (error) {
            dispatch({
                type: MOVIE_DETAILS_FAIL,
                payload: error.message
            })
        }
    }
}

export default movieSingleData;