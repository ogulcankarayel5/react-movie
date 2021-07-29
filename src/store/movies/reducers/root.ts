import { combineReducers } from 'redux'
import { popularMovieReducer } from 'store/movies/reducers/popular'
import { homeMovieReducer } from 'store/movies/reducers/movies'
import { detailReducer } from 'store/movies/reducers/detail'

const movieReducer = combineReducers({
  popularMovies: popularMovieReducer,
  homeMovies: homeMovieReducer,
  detailReducer: detailReducer,
})

export default movieReducer
