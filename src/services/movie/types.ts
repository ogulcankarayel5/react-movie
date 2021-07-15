export interface IMovieResponse {
  page: number
  results: IMovie[]
  total_results: number
  total_pages: number
}

export interface IMovie {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  video: false
  vote_average: number
  vote_count: number
}
