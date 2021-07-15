import { GET_POPULAR_SUCCESS } from 'store/movie/constants'
/* eslint-disable @typescript-eslint/ban-types */
import { Middleware } from 'redux'
import { IMovie } from 'services'
import { AppState } from 'store/store'
import { BACKDROP_SIZE, POSTER_SIZE, IMAGE_BASE_URL } from 'utils'

const TMDB_IMAGE_BASE_URL = (isPoster = false) => {
  return isPoster
    ? `${IMAGE_BASE_URL}/${POSTER_SIZE}`
    : `${IMAGE_BASE_URL}/${BACKDROP_SIZE}`
}

export const changeImagePathMiddleware: Middleware<{}, AppState> =
  () => (next) => (action) => {
    if (action.type !== GET_POPULAR_SUCCESS) {
      next(action)
    } else {
      action.payload = action.payload.map((item: IMovie) => {
        return {
          ...item,
          backdrop_path: `${TMDB_IMAGE_BASE_URL()}${item.backdrop_path}`,
          poster_path: `${TMDB_IMAGE_BASE_URL(true)}${item.poster_path}`,
        }
      })
      next(action)
    }
  }
