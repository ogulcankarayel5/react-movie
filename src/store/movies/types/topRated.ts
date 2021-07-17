import { Action } from 'redux'
import { IMovie } from 'services'
import {
  GET_TOP_RATED_REQUEST,
  GET_TOP_RATED_SUCCESS,
} from 'store/movies/constants'

export interface IGetTopRatedMoviesRequestAction extends Action {
  type: typeof GET_TOP_RATED_REQUEST
}

export interface IGetTopRatedMoviesSuccessAction extends Action {
  type: typeof GET_TOP_RATED_SUCCESS
  payload: IMovie[]
}

export type TopRatedMovieActionTypes =
  | IGetTopRatedMoviesRequestAction
  | IGetTopRatedMoviesSuccessAction
