import { combineReducers } from 'redux'
import { GET_POPULAR_REQUEST, GET_POPULAR_SUCCESS } from './constants'
import { IMovieState, MovieActionTypes } from 'store/movie/types'
import { LoadingState } from 'types'

const initialState: IMovieState = {
  loading: LoadingState.Idle,
  movies: [],
}

const topMovieReducer = (
  state = initialState,
  action: MovieActionTypes
): IMovieState => {
  switch (action.type) {
    case GET_POPULAR_REQUEST:
      return {
        ...state,
        loading: LoadingState.Loading,
      }
    case GET_POPULAR_SUCCESS:
      return {
        ...state,
        movies: action.payload,
        loading: LoadingState.Succeeded,
      }
    default:
      return state
  }
}

const movieReducer = combineReducers({
  topMovies: topMovieReducer,
})

export default movieReducer
