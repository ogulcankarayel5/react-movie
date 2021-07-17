import { ApiService } from 'services'
import { Endpoints } from 'services/movie/endpoints'
import { IMovieResponse } from 'services/movie/types'

const getPopularMovies = async (): Promise<IMovieResponse> => {
  const response = await ApiService.makeRequest<IMovieResponse>(
    { method: 'GET' },
    Endpoints.Popular
  )
  return response
}

const getTopRatedMovies = async (): Promise<IMovieResponse> => {
  const response = await ApiService.makeRequest<IMovieResponse>(
    { method: 'GET' },
    Endpoints.TopRated
  )
  return response
}

const getTvSeries = async (): Promise<any> => {
  const response = await ApiService.makeRequest<any>(
    { method: 'GET', params: { sort_by: 'popularity.desc' } },
    Endpoints.Tv
  )

  return response
}

const movieService = {
  getPopularMovies,
  getTopRatedMovies,
  getTvSeries,
}

export default movieService
