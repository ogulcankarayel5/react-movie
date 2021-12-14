import firebase from 'firebase/compat/app'
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
  UserActionTypes,
} from 'store'

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

export const addFavorite =
  (data: any) => async (dispatch: Dispatch<UserActionTypes>) => {
    const { id } = data
    dispatch(addFavoriteRequest(id))
    const uuid = firebase.auth().currentUser?.uid || ''

    try {
      await UserService.addFavorite(data, uuid)
      dispatch(addFavoriteSuccess(id))
      toast.success('Added to the favorite list')
    } catch (error) {
      dispatch(addFavoriteError(id))
    }
  }
