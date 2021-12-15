import React, { useEffect } from 'react'
import { useUser } from 'hooks'
import { useDispatch } from 'react-redux'
import { getFavorites } from 'store'
import { LoadingState } from 'types'
import { FilmSeries, Loading, Movies } from 'components'

export const Favorites = () => {
  const dispatch = useDispatch()
  const { favorites, favoritesLoading } = useUser()
  useEffect(() => {
    dispatch(getFavorites())
  }, [])

  return favoritesLoading === LoadingState.Loading ? (
    <Loading />
  ) : (
    <Movies>
      <FilmSeries films={favorites} />
    </Movies>
  )
}
