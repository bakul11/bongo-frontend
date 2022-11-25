import { combineReducers } from 'redux'
import jazzMovieReducer from '../Reducers/jazzMovieReducer';
import movieDetailsReducer from '../Reducers/movieDetailsReducer';
import movieFavReducer from '../Reducers/movieFavReducer';

const rootReducers = combineReducers({
    jazzMovieReducer,
    movieDetailsReducer,
    movieFavReducer
})

export default rootReducers;
