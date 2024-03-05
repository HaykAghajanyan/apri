import { createSlice } from '@reduxjs/toolkit'

const initialState = {
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
  }
})

export const userNameSelector = state => state.userProfile.userName

export const { setUserName } = userProfileSlice.actions

export default userProfileSlice.reducer

