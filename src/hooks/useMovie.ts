import { useTypedSelector } from './../store/store'
import { getSliderMoviesSelector, getHomeTopMoviesSelector } from 'store'
import { shallowEqual } from 'react-redux'

export const useMovie = () => {
  const sliderMovies = useTypedSelector(getSliderMoviesSelector, shallowEqual)
  const topRatedHomeMovies = useTypedSelector(getHomeTopMoviesSelector)

  return { sliderMovies, topRatedHomeMovies }
}
