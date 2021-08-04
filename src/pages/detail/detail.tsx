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
  DetailPartContainer,
  StarringContainer,
} from 'pages/detail/style'
import { Card, YoutubeVideo } from 'components'
import { useDispatch } from 'react-redux'
import { getDetail } from 'store'
import { useDetail } from 'hooks'
import { IMAGE_BASE_URL } from 'utils'
import { LoadingState } from 'types'
export const Detail = () => {
  const params = useParams<{ id: string }>()
  const dispatch = useDispatch()
  const { generalDetail, detailInfo, trailer, starringCast } = useDetail()
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
          <img
            style={{ height: 'auto', maxWidth: '100%' }}
            src={`${IMAGE_BASE_URL}/w300/${detail.poster_path}`}
          />
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
        <RightSide>
          <YoutubeVideo id={trailer} />
          <DetailPartContainer>
            <DetailSubText size='medium' bold text='Plot' />
            <DetailText size='medium' text={detail.overview} />
          </DetailPartContainer>
          <DetailPartContainer>
            <DetailSubText size='medium' bold text='Starring' />
            <StarringContainer>
              {starringCast?.map((item) => (
                <>
                  <Card small>
                    <Card.Image
                      src={`${IMAGE_BASE_URL}/w200/${item.profile_path}`}
                    />
                    <Card.Footer>
                      <Card.Text text={item.name} />
                    </Card.Footer>
                  </Card>
                </>
              ))}
            </StarringContainer>
          </DetailPartContainer>
        </RightSide>
      </DetailContainer>
    )
  )
}
