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
    if (!(action.type as string).includes('SUCCESS')) {
      next(action)
    } else {
      if (!/[0-9]/.test(Object.keys(action.payload).toString())) {
        Object.keys(action.payload).forEach((item) => {
          action.payload[item].forEach((movies: any) => {
            movies.backdrop_path = `${TMDB_IMAGE_BASE_URL()}${
              movies.backdrop_path
            }`
            movies.poster_path = `${TMDB_IMAGE_BASE_URL(true)}${
              movies.poster_path
            }`
          })
        })
      } else {
        action.payload = action.payload.map((item: IMovie) => {
          return {
            ...item,
            backdrop_path: `${TMDB_IMAGE_BASE_URL()}${item.backdrop_path}`,
            poster_path: `${TMDB_IMAGE_BASE_URL(true)}${item.poster_path}`,
          }
        })
      }

      next(action)
    }
  }
