import { IMovie, MovieService } from 'services'

import { Dispatch } from 'redux'
import { GET_POPULAR_REQUEST, GET_POPULAR_SUCCESS } from './constants'
import {
  IGetPopularMoviesRequestAction,
  MovieActionTypes,
  IGetPopularMoviesSuccessAction,
} from './types'

const getPopularMoviesRequest = (): IGetPopularMoviesRequestAction => ({
  type: GET_POPULAR_REQUEST,
})

const getPopularMoviesSuccess = (
  movies: IMovie[]
): IGetPopularMoviesSuccessAction => ({
  type: GET_POPULAR_SUCCESS,
  payload: movies,
})

export const getPopularMovies =
  () => async (dispatch: Dispatch<MovieActionTypes>) => {
    try {
      dispatch(getPopularMoviesRequest())

      const response = await MovieService.getPopularMovies()
      dispatch(getPopularMoviesSuccess(response.results))
    } catch (err) {
      return
    }
  }
