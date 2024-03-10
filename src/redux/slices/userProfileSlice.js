import { createSlice } from '@reduxjs/toolkit'
import {userProfileExtraReducer} from "../thunks/userProfileThunk";

const initialState = {
  isLoading: false,
  userName: '',
  role: '',
}

const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    setUserName: (state, { payload }) => {
      state.userName = payload
    }
  },
  extraReducers: builder => {
    userProfileExtraReducer(builder)
  }
})

export const userNameSelector = state => state.userProfile.userName

export const { setUserName } = userProfileSlice.actions

export default userProfileSlice.reducer

