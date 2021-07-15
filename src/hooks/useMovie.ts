import { useTypedSelector } from './../store/store'
import { getSliderMovies } from 'store'
import { shallowEqual } from 'react-redux'

export const useMovie = () => {
  const sliderMovies = useTypedSelector(getSliderMovies, shallowEqual)

  return { sliderMovies }
}
