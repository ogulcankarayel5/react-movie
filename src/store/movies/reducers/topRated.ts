import { IMovieState } from 'store/movies/commonTypes'
import {
  GET_TOP_RATED_REQUEST,
  GET_TOP_RATED_SUCCESS,
} from 'store/movies/constants'
import { TopRatedMovieActionTypes } from 'store/movies/types'
import { LoadingState } from 'types'

const initialState: IMovieState = {
  loading: LoadingState.Idle,
  movies: [],
}

export const topRatedMovieReducer = (
  state = initialState,
  action: TopRatedMovieActionTypes
): IMovieState => {
  switch (action.type) {
    case GET_TOP_RATED_REQUEST:
      return {
        ...state,
        loading: LoadingState.Loading,
      }
    case GET_TOP_RATED_SUCCESS:
      return {
        ...state,
        movies: action.payload,
        loading: LoadingState.Succeeded,
      }
    default:
      return state
  }
}
