import React from 'react'
import { CardContainer, FilmContainer, FilmTitle } from 'pages/home/style'
import { Card } from 'components'
import { IMovie } from 'services'
import { getYear } from 'utils'
import { Link } from 'react-router-dom'

type MoviesProps = {
  movies: IMovie[]
  title: string
}
export const Movies = ({ movies, title }: MoviesProps) => {
  return (
    <FilmContainer>
      <FilmTitle text={title} size='medium' />
      <CardContainer>
        {movies?.map((item) => {
          return (
            <Card key={item.id}>
              <Link to={`/detail/${item.id}`}>
                <Card.Image src={item.poster_path} />
              </Link>
              <Card.Footer>
                <Card.Text text={item.original_title} />
                <Card.SubText text={getYear(item.release_date)} />
              </Card.Footer>
            </Card>
          )
        })}
      </CardContainer>
    </FilmContainer>
  )
}
