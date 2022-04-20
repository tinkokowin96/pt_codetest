import { configureStore } from '@reduxjs/toolkit'
import alertReducer from './alert.slice'
import logger from 'redux-logger'

const middleware = []
if (process.env.NODE_ENV === 'development') {
      middleware.push(logger)
}

export const store = configureStore({
      reducer: alertReducer,
      middleware,
})

export type AppDispatch = typeof store.dispatch
