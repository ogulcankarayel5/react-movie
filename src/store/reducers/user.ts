import { LoadingState } from 'types'
import {
  ADD_FAVORITE_ERROR,
  ADD_FAVORITE_REQUEST,
  ADD_FAVORITE_SUCCESS,
} from '../constants'
import { IUserState, UserActionTypes } from 'store/types/user'
import {
  GET_FAVORITES_ERROR,
  GET_FAVORITES_REQUEST,
  GET_FAVORITES_SUCCESS,
} from 'store/constants'

const initialState: IUserState = {
  favorites: {
    data: [],
    addOrRemoveloading: {},
    loading: LoadingState.Idle,
  },
}

export const userReducer = (
  state = initialState,
  action: UserActionTypes
): IUserState => {
  switch (action.type) {
    case ADD_FAVORITE_REQUEST:
      return {
        ...state,
        favorites: {
          ...state.favorites,
          addOrRemoveloading: {
            ...state.favorites.addOrRemoveloading,
            [action.payload]: {
              ...state.favorites.addOrRemoveloading[action.payload],
              value: LoadingState.Loading,
            },
          },
        },
      }
    case ADD_FAVORITE_SUCCESS:
      return {
        ...state,
        favorites: {
          ...state.favorites,
          addOrRemoveloading: {
            ...state.favorites.addOrRemoveloading,
            [action.payload]: {
              ...state.favorites.addOrRemoveloading[action.payload],
              value: LoadingState.Succeeded,
            },
          },
        },
      }
    case ADD_FAVORITE_ERROR:
      return {
        ...state,
        favorites: {
          ...state.favorites,
          addOrRemoveloading: {
            ...state.favorites.addOrRemoveloading,
            [action.payload]: {
              ...state.favorites.addOrRemoveloading[action.payload],
              value: LoadingState.Failed,
            },
          },
        },
      }
    case GET_FAVORITES_REQUEST:
      return {
        ...state,
        favorites: {
          ...state.favorites,
          loading: LoadingState.Loading,
        },
      }
    case GET_FAVORITES_SUCCESS:
      return {
        ...state,
        favorites: {
          ...state.favorites,
          loading: LoadingState.Succeeded,
          data: action.payload,
        },
      }
    case GET_FAVORITES_ERROR:
      return {
        ...state,
        favorites: {
          ...state.favorites,
          loading: LoadingState.Failed,
        },
      }
    default:
      return state
  }
}
