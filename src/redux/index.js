import { configureStore, combineReducers } from '@reduxjs/toolkit'
import userProfile from './slices/userProfileSlice'
import todoSlice from './slices/todoSlice'

const rootReducer = combineReducers({
  userProfile,
  todoSlice,
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
