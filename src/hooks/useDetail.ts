import { useTypedSelector } from './../store/store'
import {
  getDetailInfoSelector,
  getDetailSelector,
  getStarringCast,
  getTrailer,
} from 'store'
import { shallowEqual } from 'react-redux'

export const useDetail = () => {
  const generalDetail = useTypedSelector(getDetailSelector, shallowEqual)
  const detailInfo = useTypedSelector(getDetailInfoSelector, shallowEqual)
  const trailer = useTypedSelector(getTrailer, shallowEqual)
  const starringCast = useTypedSelector(getStarringCast, shallowEqual)

  return { generalDetail, detailInfo, trailer, starringCast }
}
