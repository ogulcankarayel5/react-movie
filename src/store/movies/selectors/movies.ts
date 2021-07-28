import { createSelector } from 'reselect'
import { AppState } from 'store/store'
import { filterMovie } from 'store/movies/selectors/common'

export const getHomeMovies = (state: AppState) =>
  state.movieReducer.homeMovies.movies

export const getHomeMoviesSelector = createSelector(getHomeMovies, (movies) => {
  const toprated = filterMovie(movies.toprated)
  const trending = filterMovie(movies.trending)
  const upcoming = filterMovie(movies.upcoming)

  return { toprated, trending, upcoming }
})
