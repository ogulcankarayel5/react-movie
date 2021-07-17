import { IMovieState } from 'store/movies/commonTypes'
import {
  GET_POPULAR_REQUEST,
  GET_POPULAR_SUCCESS,
} from 'store/movies/constants'
import { MovieActionTypes } from 'store/movies/types/popular'
import { LoadingState } from 'types'

const initialState: IMovieState = {
  loading: LoadingState.Idle,
  movies: [],
}

export const popularMovieReducer = (
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
