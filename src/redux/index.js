import { configureStore, combineReducers } from '@reduxjs/toolkit'
import userProfile from './slices/userProfileSlice'

const rootReducer = combineReducers({
  userProfile
})

export const store = configureStore({
  reducer: rootReducer
})
