import {createAsyncThunk} from '@reduxjs/toolkit'

const fakeUserAPI = async () => {
  return await new Promise(res => {
    setTimeout(() => {
      res({
        userName: 'Narek',
        role: 'admin',
      })
    }, 1500)
  })
}


export const userProfileThunk = createAsyncThunk(
  'user/thunk',
  async () => await fakeUserAPI()
)

const userProfileThunkPending = (state) => {
  state.isLoading = true
}

const userProfileThunkFulfilled = (state, {payload}) => {
  console.log('payload', payload)
  state.userName = payload.userName;
  state.role = payload.role
  state.isLoading = false;
}

const userProfileThunkRejected = (state) => {
  state.isLoading = false;
}

export const userProfileExtraReducer = builder => {
  builder
    .addCase(userProfileThunk.pending, userProfileThunkPending)
    .addCase(userProfileThunk.fulfilled, userProfileThunkFulfilled)
    .addCase(userProfileThunk.rejected, userProfileThunkRejected)
}











