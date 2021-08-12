import React from 'react'
import {
  CardContainer,
  FilmContainer,
  FilmTitle,
} from 'components/movies/style'
import { Card } from 'components'
import { IMovie, ITV } from 'services'
import { getYear, IMAGE_BASE_URL } from 'utils'
import { Link } from 'react-router-dom'

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
      {films?.map((item) => (
        <MovieCard
          key={item.id}
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
      {tvSeries?.map((item) => (
        <MovieCard
          key={item.id}
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
  path: string | null
  text: string
  date: string
  link: string
}
export const MovieCard = ({ link, path, text, date }: MovieCardProps) => {
  return (
    <Card>
      <Link to={link}>
        <Card.Image
          src={
            path?.includes(IMAGE_BASE_URL)
              ? path
              : `${IMAGE_BASE_URL}/w780/${path}`
          }
        />
      </Link>
      <Card.Footer>
        <Card.Text text={text} />
        <Card.SubText text={getYear(date)} />
      </Card.Footer>
    </Card>
  )
}
