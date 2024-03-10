import { configureStore, combineReducers } from '@reduxjs/toolkit'
import userProfile from './slices/userProfileSlice'

const rootReducer = combineReducers({
  userProfile
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: true,
      immutableCheck: true,
      actionCreatorCheck: true,
      thunk: true,
    })
  }
})
