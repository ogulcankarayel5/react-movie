import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
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
  CrewContainer,
  CrewItemContainer,
} from 'pages/detail/style'
import { Card, YoutubeVideo } from 'components'
import { useDispatch } from 'react-redux'
import { getDetail } from 'store'
import { useDetail } from 'hooks'
import { getYear, IMAGE_BASE_URL } from 'utils'
import { LoadingState } from 'types'
import { ICrew } from 'services'
export const Detail = () => {
  const params = useParams<{ id: string }>()
  const dispatch = useDispatch()
  const { generalDetail, detailInfo, trailer, starringCast, crew } = useDetail()
  const { detail, loading } = generalDetail
  useEffect(() => {
    const { id } = params
    dispatch(getDetail(parseInt(id)))
  }, [params.id])

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
                  <Card key={item.id} small>
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
          <DetailPartContainer>
            <CrewContainer>
              <CrewItem arr={crew['Director']} title='Directed By' />
              <CrewItem arr={crew['Producer']} title='Produced By' />
              <CrewItem arr={crew['Screenplay']} title='Written By' />
              <CrewItem
                arr={crew['Original Music Composer']}
                title='Music By'
              />
            </CrewContainer>
          </DetailPartContainer>
          <DetailPartContainer>
            <DetailSubText size='medium' bold text='Recommended' />
            <CrewContainer>
              {generalDetail.recommended.slice(0, 4).map((item) => (
                <Card key={item.id}>
                  <Link to={`/detail/${item.id}`}>
                    <Card.Image
                      src={`${IMAGE_BASE_URL}/w300/${item.poster_path}`}
                    />
                  </Link>
                  <Card.Footer>
                    <Card.Text text={item.original_title} />
                    <Card.SubText text={getYear(item.release_date)} />
                  </Card.Footer>
                </Card>
              ))}
            </CrewContainer>
          </DetailPartContainer>
        </RightSide>
      </DetailContainer>
    )
  )
}

const CrewItem = ({ arr, title }: any) => {
  return (
    <CrewItemContainer>
      <DetailSubText size='medium' bold text={title} />
      {(arr as ICrew[]).map((item) => (
        <DetailText key={item.id} size='medium' text={item.original_name} />
      ))}
    </CrewItemContainer>
  )
}
