import { LoadingState } from 'types'
import { DiscoverActionTypes, IDiscoverState } from 'store/types'
import {
  DISCOVER_REQUEST,
  DISCOVER_SUCCESS,
  DISCOVER_TV_SUCCESS,
  OPTIONS_REQUEST,
  OPTIONS_SUCCESS,
} from 'store/constants'

const initialState: IDiscoverState = {
  loading: LoadingState.Idle,
  movies: [],
  tv: [],
  optionsLoading: LoadingState.Idle,
  genres: [],
  years: [],
  languages: [],
}

export const discoverReducer = (
  state = initialState,
  action: DiscoverActionTypes
): IDiscoverState => {
  switch (action.type) {
    case DISCOVER_REQUEST:
      return {
        ...state,
        loading: LoadingState.Loading,
      }
    case OPTIONS_REQUEST:
      return {
        ...state,
        optionsLoading: LoadingState.Loading,
      }

    case DISCOVER_SUCCESS:
      return {
        ...state,
        loading: LoadingState.Succeeded,
        movies: action.payload,
      }
    case DISCOVER_TV_SUCCESS:
      return {
        ...state,
        loading: LoadingState.Succeeded,
        tv: action.payload,
      }
    case OPTIONS_SUCCESS:
      return {
        ...state,
        optionsLoading: LoadingState.Succeeded,
        genres: action.payload.genres,
        years: action.payload.years || [],
        languages: action.payload.languages,
      }
    default:
      return state
  }
}
