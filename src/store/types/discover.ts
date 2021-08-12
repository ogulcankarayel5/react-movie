import { IMovieState } from 'store/types/commonTypes'
import { Action } from 'redux'
import { IGenre, ILanguage, IMovie, ITV } from 'services'
import {
  DISCOVER_REQUEST,
  DISCOVER_SUCCESS,
  DISCOVER_TV_SUCCESS,
  OPTIONS_REQUEST,
  OPTIONS_SUCCESS,
} from 'store/constants'
import { LoadingState } from 'types'

export interface IDiscoverState extends IMovieState {
  genres: IGenre[]
  years: number[]
  languages: ILanguage[]
  optionsLoading: LoadingState
  tv: ITV[]
}

export interface IDiscoverRequestAction extends Action {
  type: typeof DISCOVER_REQUEST
}

export interface IDiscoverOptionsRequestAction extends Action {
  type: typeof OPTIONS_REQUEST
}

export interface IDiscoverSuccessAction extends Action {
  type: typeof DISCOVER_SUCCESS
  payload: IMovie[]
}

export interface IDiscoverTvSuccessAction extends Action {
  type: typeof DISCOVER_TV_SUCCESS
  payload: ITV[]
}

export interface IDiscoverOptionsSuccessAction extends Action {
  type: typeof OPTIONS_SUCCESS
  payload: { genres: IGenre[]; years?: number[]; languages: ILanguage[] }
}

export type DiscoverActionTypes =
  | IDiscoverRequestAction
  | IDiscoverSuccessAction
  | IDiscoverTvSuccessAction
  | IDiscoverOptionsRequestAction
  | IDiscoverOptionsSuccessAction
