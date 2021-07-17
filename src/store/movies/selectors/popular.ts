import { createSelector } from 'reselect'
import { AppState } from 'store/store'

export const getPopularMoviesSelector = (state: AppState) =>
  state.movieReducer.popularMovies.movies

export const getSliderMoviesSelector = createSelector(
  getPopularMoviesSelector,
  (movies) => {
    const filtered = movies.filter(
      (item) => item.backdrop_path !== null && item.vote_average !== 0
    )
    const shuffled = filtered.sort(() => 0.5 - Math.random())

    // Get sub-array of first n elements after shuffled
    const selected = shuffled.slice(0, 6)

    return selected
  }
)
