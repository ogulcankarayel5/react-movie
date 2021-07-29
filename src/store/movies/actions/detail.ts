import { GET_DETAIL_REQUEST, GET_DETAIL_SUCCESS } from 'store/movies/constants'
import { Dispatch } from 'redux'

import {
  DetailActionTypes,
  IDetail,
  IGetDetailRequestAction,
  IGetDetailSuccessAction,
} from 'store/movies/types'
import { MovieService } from 'services'

const getDetailRequest = (): IGetDetailRequestAction => ({
  type: GET_DETAIL_REQUEST,
})

const getDetailSuccess = (data: IDetail): IGetDetailSuccessAction => ({
  type: GET_DETAIL_SUCCESS,
  payload: data,
})

export const getDetail =
  (movieId: number) => async (dispatch: Dispatch<DetailActionTypes>) => {
    dispatch(getDetailRequest())

    const detail = await MovieService.getDetail(movieId)
    const casts = await MovieService.getMovieCast(movieId)
    const videos = await MovieService.getVideos(movieId)

    dispatch(getDetailSuccess({ detail, casts, videos }))
  }
