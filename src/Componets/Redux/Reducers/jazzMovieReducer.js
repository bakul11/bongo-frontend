import { JAZZ_MOVIE_FAIL, JAZZ_MOVIE_REQ, JAZZ_MOVIE_SUCCESS } from "../Actions/jazzMovieAction";

const instilizeValue = {
    movie: [],
    loadding: false,
    error: ''
}

const jazzMovieReducer = (state = instilizeValue, action) => {
    switch (action.type) {
        case JAZZ_MOVIE_REQ:
            return {
                ...state,
                loadding: true
            }

        case JAZZ_MOVIE_SUCCESS:
            return {
                ...state,
                movie: action.payload,
                loadding: false
            }

        case JAZZ_MOVIE_FAIL:
            return {
                ...state,
                loadding: true,
                error: action.payload
            }

        default:
            return state
    }
}

export default jazzMovieReducer;