import { createSelector } from 'reselect'
import { AppState } from 'store/store'
import { filterMovie } from 'store/movies/selectors/common'

export const getHomeMovies = (state: AppState) => state.movieReducer.homeMovies

export const getHomeMoviesSelector = createSelector(
  getHomeMovies,
  (homeMovies) => {
    const toprated = filterMovie(homeMovies.movies.toprated)
    const trending = filterMovie(homeMovies.movies.trending)
    const upcoming = filterMovie(homeMovies.movies.upcoming)
    const loading = homeMovies.loading
    return { toprated, trending, upcoming, loading }
  }
)
