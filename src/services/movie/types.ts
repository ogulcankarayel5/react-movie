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

export interface ICastResponse {
  id: number | null
  cast: ICast[]
  crew: ICrew[]
}

interface ICommonCredits {
  adult: boolean
  gender: number
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path: string
  credit_id: string
}
export interface ICast extends ICommonCredits {
  cast_id: number
  character: string
  order: number
}

export interface ICrew extends ICommonCredits {
  job: string
  department: string
}

export interface IVideo {
  name: string
  key: string
  site: string
  size: number
  type: string
  official: boolean
  published_at: string
  id: string
}
export interface IVideosResponse {
  id: number | null
  results: IVideo[]
}
