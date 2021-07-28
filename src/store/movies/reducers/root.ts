import { combineReducers } from 'redux'
import { popularMovieReducer } from 'store/movies/reducers/popular'
import { homeMovieReducer } from 'store/movies/reducers/movies'

const movieReducer = combineReducers({
  popularMovies: popularMovieReducer,
  homeMovies: homeMovieReducer,
})

export default movieReducer
