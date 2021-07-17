import { IMovie } from 'services'
import { LoadingState } from 'types'

export interface IMovieState {
  loading: LoadingState
  movies: IMovie[] | []
}
