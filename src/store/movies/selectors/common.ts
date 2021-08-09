import { IMovie } from 'services'

export const filterMovie = (movies: IMovie[]) => {
  const filtered = movies.filter(
    (item) => item.backdrop_path !== null && item.vote_average !== 0
  )
  const shuffled = filtered.sort(() => 0.5 - Math.random())

  // Get sub-array of first n elements after shuffled
  const selected = shuffled.slice(0, 10)

  return selected
}
