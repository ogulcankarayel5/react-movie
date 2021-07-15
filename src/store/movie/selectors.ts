import { createSelector } from 'reselect'
import { AppState } from 'store/store'

export const getTopMovies = (state: AppState) =>
  state.movieReducer.topMovies.movies

export const getSliderMovies = createSelector(getTopMovies, (movies) => {
  const shuffled = movies.sort(() => 0.5 - Math.random())

  // Get sub-array of first n elements after shuffled
  const selected = shuffled.slice(0, 6)

  return selected
})
