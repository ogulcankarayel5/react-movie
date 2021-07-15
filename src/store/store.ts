import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import thunk, { ThunkMiddleware } from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { MovieActionTypes, movieReducer } from 'store/movie'
import { changeImagePathMiddleware } from './movie/middleware'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

export const rootReducer = combineReducers({
  movieReducer,
})

export type AppActions = MovieActionTypes

export type AppState = ReturnType<typeof rootReducer>

const loggerMiddleware = createLogger({
  predicate: () => process.env.NODE_ENV !== 'production',
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const middleware = [
  loggerMiddleware,
  thunk as ThunkMiddleware<AppState, AppActions>,
  changeImagePathMiddleware,
]

export const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector

// eslint-disable-next-line @typescript-eslint/ban-types
export const store = createStore<AppState, AppActions, {}, {}>(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
)
