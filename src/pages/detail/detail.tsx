import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {
  DetailContainer,
  DetailTitle,
  DetailSubText,
  DetailText,
  LeftSide,
  RightSide,
  InfoContainer,
  InfoItemContainer,
} from 'pages/detail/style'
import { useDispatch } from 'react-redux'
import { getDetail } from 'store'
import { useDetail } from 'hooks'
import { IMAGE_BASE_URL } from 'utils'
import { LoadingState } from 'types'
export const Detail = () => {
  const params = useParams<{ id: string }>()
  const dispatch = useDispatch()
  const { generalDetail, detailInfo } = useDetail()
  const { detail, loading } = generalDetail
  useEffect(() => {
    const { id } = params
    dispatch(getDetail(parseInt(id)))
  }, [])

  return (
    loading !== LoadingState.Idle &&
    loading !== LoadingState.Loading && (
      <DetailContainer>
        <LeftSide>
          <DetailTitle text={detail.original_title} />
          <img src={`${IMAGE_BASE_URL}/w300/${detail.poster_path}`} />
          <InfoContainer>
            {detailInfo?.map((item) => (
              <InfoItemContainer
                extraMargin={item.name === 'IMDB'}
                key={item.name}
              >
                <DetailSubText size='medium' bold text={item.name} />
                <DetailText
                  size={item.name !== 'IMDB' ? 'medium' : 'large'}
                  text={item.value}
                />
              </InfoItemContainer>
            ))}
          </InfoContainer>
        </LeftSide>
        <RightSide />
      </DetailContainer>
    )
  )
}
