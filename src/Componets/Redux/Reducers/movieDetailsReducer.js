import { MOVIE_DETAILS_FAIL, MOVIE_DETAILS_REQ, MOVIE_DETAILS_SUCCESS } from "../Actions/movieDetailsAction";

const instilizeId = {
    movie: {},
    loadding: false,
    error: ''
}

const movieDetailsReducer = (state = instilizeId, action) => {
    switch (action.type) {
        case MOVIE_DETAILS_REQ:
            return {
                ...state,
                loadding: true
            }

        case MOVIE_DETAILS_SUCCESS:
            return {
                ...state,
                movie: action.payload,
                loadding: false
            }

        case MOVIE_DETAILS_FAIL:
            return {
                ...state,
                error: action.payload,
                loadding: true
            }

        default:
            return state
    }
}


export default movieDetailsReducer;