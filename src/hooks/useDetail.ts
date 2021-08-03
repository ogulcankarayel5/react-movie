import { useTypedSelector } from './../store/store'
import { getDetailInfoSelector, getDetailSelector } from 'store'
import { shallowEqual } from 'react-redux'

export const useDetail = () => {
  const generalDetail = useTypedSelector(getDetailSelector, shallowEqual)
  const detailInfo = useTypedSelector(getDetailInfoSelector, shallowEqual)
  return { generalDetail, detailInfo }
}
