import { Action } from 'redux'
import {
  ADD_FAVORITE_ERROR,
  ADD_FAVORITE_REQUEST,
  ADD_FAVORITE_SUCCESS,
} from 'store'

export interface IUserState {
  loading: any
  data: any
}

export interface IAddFavoriteRequestAction extends Action {
  type: typeof ADD_FAVORITE_REQUEST
  payload: number
}

export interface IAddFavoriteSuccessAction extends Action {
  type: typeof ADD_FAVORITE_SUCCESS
  payload: number
}

export interface IAddFavoriteErrorAction extends Action {
  type: typeof ADD_FAVORITE_ERROR
  payload: number
}

export type UserActionTypes =
  | IAddFavoriteRequestAction
  | IAddFavoriteSuccessAction
  | IAddFavoriteErrorAction
