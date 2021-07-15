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

const movieService = {
  getPopularMovies,
}

export default movieService
