import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { discover, discoverTv, getOptions } from 'store/actions/discover'
import { FilterTypes } from 'components'

interface IDiscoverProps {
  [key: string]: string
}
export const useDiscoverParams = (
  initialValues: IDiscoverProps,
  type: FilterTypes
) => {
  const [value, setValue] = useState(initialValues)
  const dispatch = useDispatch()
  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target

    setValue((prev: any) => ({ ...prev, [name]: value }))
  }

  const isEmpty = (value: string) => {
    return value !== '' ? true : false
  }
  useEffect(() => {
    dispatch(getOptions())
  }, [])

  useEffect(() => {
    if (type === FilterTypes.Movie) {
      dispatch(
        discover({
          ...(isEmpty(value.imdb) && { 'vote_average.gte': value.imdb }),
          ...(isEmpty(value.genre) && { with_genres: value.genre }),
          ...(isEmpty(value.year) && { primary_release_year: value.year }),
          ...(isEmpty(value.language) && {
            with_original_language: value.language,
          }),
          ...(isEmpty(value.adult) && { include_adult: value.adult }),
        })
      )
    } else {
      dispatch(
        discoverTv({
          ...(isEmpty(value.imdb) && { 'vote_average.gte': value.imdb }),
          ...(isEmpty(value.genre) && { with_genres: value.genre }),
          ...(isEmpty(value.year) && { first_air_date_year: value.year }),
          ...(isEmpty(value.language) && {
            with_original_language: value.language,
          }),
        })
      )
    }
  }, [value])

  return { value, onChange }
}
