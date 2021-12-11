import { authReducer } from './reducers/auth'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import thunk, { ThunkMiddleware } from 'redux-thunk'
//import { createLogger } from 'redux-logger'
import { movieReducer } from 'store/reducers'
import { populateYearsMiddleware, authErrorMiddleware } from 'store/middlewares'
import {
  PopularMoviesActionTypes,
  MoviesActionTypes,
  DetailActionTypes,
  DiscoverActionTypes,
  AuthActionTypes,
} from 'store/types'
import { createLogger } from 'redux-logger'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

export const rootReducer = combineReducers({
  movieReducer,
  authReducer,
})

export type AppActions =
  | PopularMoviesActionTypes
  | MoviesActionTypes
  | DetailActionTypes
  | DiscoverActionTypes
  | AuthActionTypes

export type AppState = ReturnType<typeof rootReducer>

const loggerMiddleware = createLogger({
  predicate: () => process.env.NODE_ENV !== 'production',
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const middleware = [
  loggerMiddleware,
  thunk as ThunkMiddleware<AppState, AppActions>,
  //changeImagePathMiddleware,
  populateYearsMiddleware,
  authErrorMiddleware,
]

export const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector

// eslint-disable-next-line @typescript-eslint/ban-types
export const store = createStore<AppState, AppActions, {}, {}>(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
)
