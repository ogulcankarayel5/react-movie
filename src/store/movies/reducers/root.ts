import { combineReducers } from 'redux'
import { popularMovieReducer } from 'store/movies/reducers/popular'
import { topRatedMovieReducer } from 'store/movies/reducers/topRated'

const movieReducer = combineReducers({
  popularMovies: popularMovieReducer,
  topRatedMovies: topRatedMovieReducer,
})

export default movieReducer
