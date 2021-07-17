import { createSelector } from 'reselect'
import { AppState } from 'store/store'

export const getTopMoviesSelector = (state: AppState) =>
  state.movieReducer.topRatedMovies.movies

export const getHomeTopMoviesSelector = createSelector(
  getTopMoviesSelector,
  (movies) => {
    // Get sub-array of first n elements after shuffled
    const selected = movies.slice(0, 7)

    return selected
  }
)
