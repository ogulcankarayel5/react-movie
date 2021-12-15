import React from 'react'
import {
  CardContainer,
  FilmContainer,
  FilmTitle,
  AddIcon,
  LoadingContainer,
} from 'components/movies/style'
import { Card } from 'components'
import { IMovie, ITV } from 'services'
import { getYear, IMAGE_BASE_URL } from 'utils'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addFavorite } from 'store'
import { useUser } from 'hooks'
import { LoadingState } from 'types'
import ClipLoader from 'react-spinners/ClipLoader'

type MoviesProps = {
  title?: string
  wrap?: boolean
  children: React.ReactNode
}
export const Movies = ({ title, wrap = false, children }: MoviesProps) => {
  return (
    <FilmContainer $wrap={wrap}>
      {title && <FilmTitle text={title} size='medium' />}
      <CardContainer $wrap={wrap}>{children}</CardContainer>
    </FilmContainer>
  )
}

type FilmsProps = {
  films: IMovie[]
}
export const FilmSeries = ({ films }: FilmsProps) => {
  return (
    <>
      {films?.map((item, index) => (
        <MovieCard
          key={`${item.id} - ${index}`}
          id={item.id}
          link={`/detail/movie/${item.id}`}
          path={item.poster_path}
          text={item.original_title}
          date={item.release_date}
        />
      ))}
    </>
  )
}
type TvSeriesProps = {
  tvSeries: ITV[]
}
export const TvSeries = ({ tvSeries }: TvSeriesProps) => {
  return (
    <>
      {tvSeries?.map((item, index) => (
        <MovieCard
          key={`${item.id} - ${index}`}
          id={item.id}
          link={`/detail/tv/${item.id}`}
          path={item.poster_path}
          text={item.original_name}
          date={item.first_air_date}
        />
      ))}
    </>
  )
}

type MovieCardProps = {
  id: number
  path: string | null
  text: string
  date: string
  link: string
}
export const MovieCard = ({ id, link, path, text, date }: MovieCardProps) => {
  const imgPath = path?.includes(IMAGE_BASE_URL)
    ? path
    : `${IMAGE_BASE_URL}/w780/${path}`
  const dateText = getYear(date)

  return (
    <Card>
      <FavoriteIcon {...{ id, link, path, text, date }} />
      <Link to={link}>
        <Card.Image src={imgPath} />
      </Link>
      <Card.Footer>
        <Card.Text text={text} />
        <Card.SubText text={dateText} />
      </Card.Footer>
    </Card>
  )
}

export const FavoriteIcon = (data: MovieCardProps) => {
  const { loading } = useUser(data.id)
  const dispatch = useDispatch()
  const addToFav = async () => {
    dispatch(
      addFavorite({
        ...data,
        poster_path: data.path,
        original_title: data.text,
        release_date: data.date,
      })
    )
  }

  return loading && loading.value === LoadingState.Loading ? (
    <LoadingContainer>
      <ClipLoader color='#CE1E37' size={24} />
    </LoadingContainer>
  ) : (
    <AddIcon size={24} color='#CE1E37' onClick={addToFav} />
  )
}
