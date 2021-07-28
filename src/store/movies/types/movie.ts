import { IMovies } from './../commonTypes'
import { GET_MOVIE_REQUEST, GET_MOVIE_SUCCESS } from './../constants'
import { Action } from 'redux'
export interface IGetMoviesRequestAction extends Action {
  type: typeof GET_MOVIE_REQUEST
}

export interface IGetMoviesSuccessAction extends Action {
  type: typeof GET_MOVIE_SUCCESS
  payload: IMovies
}

export type MoviesActionTypes =
  | IGetMoviesRequestAction
  | IGetMoviesSuccessAction
