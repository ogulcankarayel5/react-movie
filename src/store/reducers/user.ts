import { LoadingState } from 'types'
import {
  ADD_FAVORITE_ERROR,
  ADD_FAVORITE_REQUEST,
  ADD_FAVORITE_SUCCESS,
} from '../constants'
import { IUserState, UserActionTypes } from 'store/types/user'

const initialState: IUserState = {
  loading: {},
  data: [],
}
//TODO: change loading
export const userReducer = (
  state = initialState,
  action: UserActionTypes
): IUserState => {
  switch (action.type) {
    case ADD_FAVORITE_REQUEST:
      return {
        ...state,
        loading: {
          ...state.loading,
          [action.payload]: {
            ...state.loading[action.payload],
            value: LoadingState.Loading,
          },
        },
      }
    case ADD_FAVORITE_SUCCESS:
      return {
        ...state,
        loading: {
          ...state.loading,
          [action.payload]: {
            ...state.loading[action.payload],
            value: LoadingState.Succeeded,
          },
        },
      }
    case ADD_FAVORITE_ERROR:
      return {
        ...state,
        loading: {
          ...state.loading,
          [action.payload]: {
            ...state.loading[action.payload],
            value: LoadingState.Succeeded,
          },
        },
      }
    default:
      return state
  }
}
