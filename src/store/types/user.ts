import { Action } from 'redux'
import {
  ADD_FAVORITE_ERROR,
  ADD_FAVORITE_REQUEST,
  ADD_FAVORITE_SUCCESS,
  GET_FAVORITES_ERROR,
  GET_FAVORITES_REQUEST,
  GET_FAVORITES_SUCCESS,
} from 'store'
import { LoadingState } from 'types'

export interface IUserState {
  favorites: {
    addOrRemoveloading: any
    data: any
    loading: LoadingState
  }
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

export interface IGetFavoritesRequestAction extends Action {
  type: typeof GET_FAVORITES_REQUEST
}

export interface IGetFavoritesSuccessAction extends Action {
  type: typeof GET_FAVORITES_SUCCESS
  payload: number
}

export interface IGetFavoritesErrorAction extends Action {
  type: typeof GET_FAVORITES_ERROR
}

export type UserActionTypes =
  | IAddFavoriteRequestAction
  | IAddFavoriteSuccessAction
  | IAddFavoriteErrorAction
  | IGetFavoritesRequestAction
  | IGetFavoritesSuccessAction
  | IGetFavoritesErrorAction
