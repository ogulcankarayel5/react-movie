import { useTypedSelector } from './../store/store'
import {
  getCrew,
  getDetailInfoSelector,
  getDetailSelector,
  getRecommended,
  getStarringCast,
  getTrailer,
} from 'store'
import { shallowEqual } from 'react-redux'

export const useDetail = () => {
  const generalDetail = useTypedSelector(getDetailSelector, shallowEqual)
  const detailInfo = useTypedSelector(getDetailInfoSelector, shallowEqual)
  const trailer = useTypedSelector(getTrailer, shallowEqual)
  const starringCast = useTypedSelector(getStarringCast, shallowEqual)
  const crew = useTypedSelector(getCrew, shallowEqual)
  const recommended = useTypedSelector(getRecommended, shallowEqual)

  return { generalDetail, detailInfo, trailer, starringCast, crew, recommended }
}
