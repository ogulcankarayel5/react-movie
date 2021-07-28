import { createSelector } from 'reselect'
import { AppState } from 'store/store'
import { filterMovie } from 'store/movies/selectors/common'

export const getPopularMoviesSelector = (state: AppState) =>
  state.movieReducer.popularMovies.movies

export const getSliderMoviesSelector = createSelector(
  getPopularMoviesSelector,
  (movies) => {
    const filtered = filterMovie(movies)

    return filtered
  }
)
