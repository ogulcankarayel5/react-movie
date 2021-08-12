import { Dispatch } from 'redux'
import { IGenre, ILanguage, IMovie } from 'services'
import {
  DISCOVER_REQUEST,
  DISCOVER_SUCCESS,
  DISCOVER_TV_SUCCESS,
  OPTIONS_REQUEST,
  OPTIONS_SUCCESS,
} from 'store/constants'
import {
  DiscoverActionTypes,
  IDiscoverOptionsRequestAction,
  IDiscoverOptionsSuccessAction,
  IDiscoverRequestAction,
  IDiscoverSuccessAction,
  IDiscoverTvSuccessAction,
} from 'store/types'
import { AppState } from 'store/store'
import { DiscoverService, ITV } from 'services/discover'

const discoverRequest = (): IDiscoverRequestAction => ({
  type: DISCOVER_REQUEST,
})

const getOptionsRequest = (): IDiscoverOptionsRequestAction => ({
  type: OPTIONS_REQUEST,
})

const discoverSuccess = (movies: IMovie[]): IDiscoverSuccessAction => ({
  type: DISCOVER_SUCCESS,
  payload: movies,
})

const discoverTvSuccess = (tv: ITV[]): IDiscoverTvSuccessAction => ({
  type: DISCOVER_TV_SUCCESS,
  payload: tv,
})

const getOptionsSuccess = (
  genres: IGenre[],
  languages: ILanguage[]
): IDiscoverOptionsSuccessAction => ({
  type: OPTIONS_SUCCESS,
  payload: { genres: genres, years: [], languages: languages },
})

export const discover =
  (params: any) => async (dispatch: Dispatch<DiscoverActionTypes>) => {
    dispatch(discoverRequest())

    const response = await DiscoverService.discover(params)
    dispatch(discoverSuccess(response.results))
  }

export const discoverTv =
  (params: any) => async (dispatch: Dispatch<DiscoverActionTypes>) => {
    dispatch(discoverRequest())

    const response = await DiscoverService.discoverTv(params)
    dispatch(discoverTvSuccess(response.results))
  }
export const getOptions =
  () => async (dispatch: Dispatch<DiscoverActionTypes>, getState: any) => {
    if (
      (getState() as AppState).movieReducer.discoverReducer.genres.length === 0
    ) {
      dispatch(getOptionsRequest())

      const genres = await DiscoverService.getGenres()
      const languages = await DiscoverService.getLanguages()

      dispatch(getOptionsSuccess(genres.genres, languages))
    }
  }
