import React, { ReactElement, useEffect } from 'react'

import { HomeSlider } from 'pages/home/components/slider'
import { Movies } from 'components/movies/movies'
import { FilmsContainer } from 'pages/home/style'
import { useDispatch } from 'react-redux'
import { getHomeMovies } from 'store/movies/actions/movies'
import { useMovie } from 'hooks'
import { LoadingState } from 'types'
import { Loading } from 'components'

export const Home = (): ReactElement => {
  const { homeMovies } = useMovie()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getHomeMovies())
  }, [])

  return (
    <>
      <HomeSlider />

      {homeMovies.loading !== LoadingState.Loading ? (
        <FilmsContainer>
          <Movies title='Top Rated' movies={homeMovies.toprated} />
          <Movies title='Trending' movies={homeMovies.trending} />
          <Movies title='Upcoming' movies={homeMovies.upcoming} />
        </FilmsContainer>
      ) : (
        <Loading />
      )}
    </>
  )
}
