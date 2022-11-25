import axios from "axios";

export const JAZZ_MOVIE_REQ = 'JAZZ_MOVIE_REQ';
export const JAZZ_MOVIE_SUCCESS = 'JAZZ_MOVIE_SUCCESS';
export const JAZZ_MOVIE_FAIL = 'JAZZ_MOVIE_FAIL';



const loadJazzMovie = (dispatch) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: JAZZ_MOVIE_REQ
            })

            //fetching data 
            const res = await axios.get('https://bongo-movie.onrender.com/bongo/getJazzMedia')
            dispatch({
                type: JAZZ_MOVIE_SUCCESS,
                payload: res.data
            })
        } catch (error) {
            dispatch({
                type: JAZZ_MOVIE_FAIL,
                payload: error.message
            })
        }
    }
}

export default loadJazzMovie;