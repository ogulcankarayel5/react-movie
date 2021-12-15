import toast from 'react-hot-toast'
import {
  IAddFavoriteRequestAction,
  IAddFavoriteSuccessAction,
  IAddFavoriteErrorAction,
} from '../types'
import { Dispatch } from 'redux'
import { UserService } from '../../services/user'
import {
  ADD_FAVORITE_ERROR,
  ADD_FAVORITE_REQUEST,
  ADD_FAVORITE_SUCCESS,
  GET_FAVORITES_ERROR,
  GET_FAVORITES_REQUEST,
  GET_FAVORITES_SUCCESS,
} from 'store/constants'
import {
  IGetFavoritesErrorAction,
  IGetFavoritesRequestAction,
  IGetFavoritesSuccessAction,
  UserActionTypes,
} from 'store/types/user'
import { AppState } from 'store/store'

export const addFavoriteRequest = (id: number): IAddFavoriteRequestAction => ({
  type: ADD_FAVORITE_REQUEST,
  payload: id,
})

export const addFavoriteSuccess = (id: number): IAddFavoriteSuccessAction => ({
  type: ADD_FAVORITE_SUCCESS,
  payload: id,
})

const addFavoriteError = (id: number): IAddFavoriteErrorAction => ({
  type: ADD_FAVORITE_ERROR,
  payload: id,
})

export const getFavoritesRequest = (): IGetFavoritesRequestAction => ({
  type: GET_FAVORITES_REQUEST,
})

export const getFavoritesSuccess = (data: any): IGetFavoritesSuccessAction => ({
  type: GET_FAVORITES_SUCCESS,
  payload: data,
})

const getFavoritesError = (): IGetFavoritesErrorAction => ({
  type: GET_FAVORITES_ERROR,
})

export const addFavorite =
  (data: any) => async (dispatch: Dispatch<UserActionTypes>, getState: any) => {
    const { id } = data
    dispatch(addFavoriteRequest(id))
    const uuid = (getState() as AppState).authReducer.user?.uid || ''
    try {
      await UserService.addFavorite(data, uuid)
      dispatch(addFavoriteSuccess(id))
      toast.success('Added to the favorite list')
    } catch (error) {
      dispatch(addFavoriteError(id))
    }
  }

export const getFavorites =
  () => async (dispatch: Dispatch<UserActionTypes>, getState: any) => {
    const uuid = (getState() as AppState).authReducer.user?.uid || ''
    dispatch(getFavoritesRequest())
    try {
      const favorites = UserService.getFavorites(uuid)
      if (!(await favorites).exists()) {
        dispatch(getFavoritesError())
      }
      dispatch(getFavoritesSuccess((await favorites).data()?.movies))
    } catch (error) {
      dispatch(getFavoritesError())
    }
  }
