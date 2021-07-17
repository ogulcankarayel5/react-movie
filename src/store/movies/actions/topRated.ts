import {
  GET_TOP_RATED_SUCCESS,
  GET_TOP_RATED_REQUEST,
} from 'store/movies/constants'
import { Dispatch } from 'redux'

import {
  IGetTopRatedMoviesSuccessAction,
  IGetTopRatedMoviesRequestAction,
  TopRatedMovieActionTypes,
} from 'store/movies/types'
import { IMovie, MovieService } from 'services'

const getTopRatedMoviesRequest = (): IGetTopRatedMoviesRequestAction => ({
  type: GET_TOP_RATED_REQUEST,
})

const getTopRatedMoviesSuccess = (
  movies: IMovie[]
): IGetTopRatedMoviesSuccessAction => ({
  type: GET_TOP_RATED_SUCCESS,
  payload: movies,
})

export const getTopRatedMovies =
  () => async (dispatch: Dispatch<TopRatedMovieActionTypes>) => {
    dispatch(getTopRatedMoviesRequest())

    const response = await MovieService.getTopRatedMovies()

    dispatch(getTopRatedMoviesSuccess(response.results))
  }
