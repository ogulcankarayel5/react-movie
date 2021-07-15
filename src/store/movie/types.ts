import { Action } from 'redux'
import { IMovie } from 'services'
import { GET_POPULAR_REQUEST, GET_POPULAR_SUCCESS } from 'store/movie/constants'
import { LoadingState } from 'types'

export interface IMovieState {
  loading: LoadingState
  movies: IMovie[] | []
}

export interface IGetPopularMoviesRequestAction extends Action {
  type: typeof GET_POPULAR_REQUEST
}

export interface IGetPopularMoviesSuccessAction extends Action {
  type: typeof GET_POPULAR_SUCCESS
  payload: IMovie[]
}

export type MovieActionTypes =
  | IGetPopularMoviesRequestAction
  | IGetPopularMoviesSuccessAction
