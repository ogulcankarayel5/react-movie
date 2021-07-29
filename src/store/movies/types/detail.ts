import { GET_DETAIL_REQUEST, GET_DETAIL_SUCCESS } from './../constants'
import { Action } from 'redux'
import { LoadingState } from 'types'
import { ICastResponse, IVideosResponse } from 'services'

export interface IDetail {
  videos: IVideosResponse
  detail: any
  casts: ICastResponse
}

export interface IDetailState extends IDetail {
  loading: LoadingState
}
export interface IGetDetailRequestAction extends Action {
  type: typeof GET_DETAIL_REQUEST
}

export interface IGetDetailSuccessAction extends Action {
  type: typeof GET_DETAIL_SUCCESS
  payload: IDetail
}

export type DetailActionTypes =
  | IGetDetailRequestAction
  | IGetDetailSuccessAction
