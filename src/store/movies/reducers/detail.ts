import { GET_DETAIL_REQUEST, GET_DETAIL_SUCCESS } from 'store/movies/constants'
import { DetailActionTypes, IDetailState } from 'store/movies/types'
import { LoadingState } from 'types'

const initialState: IDetailState = {
  loading: LoadingState.Idle,
  casts: {
    id: 0,
    cast: [],
    crew: [],
  },
  detail: [],
  videos: {
    id: 0,
    results: [],
  },
}

export const detailReducer = (
  state = initialState,
  action: DetailActionTypes
): IDetailState => {
  switch (action.type) {
    case GET_DETAIL_REQUEST:
      return {
        ...state,
        loading: LoadingState.Loading,
      }
    case GET_DETAIL_SUCCESS:
      return {
        ...state,
        casts: action.payload.casts,
        detail: action.payload.detail,
        videos: action.payload.videos,
        loading: LoadingState.Succeeded,
      }
    default:
      return state
  }
}
