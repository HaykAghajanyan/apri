import {createAsyncThunk} from '@reduxjs/toolkit'
import {fakeUserAPI} from "../../utils/helpers";


export const userProfileThunk = createAsyncThunk(
  'user/thunk',
  async () => await fakeUserAPI()
)

const userProfileThunkPending = (state) => {
  state.isLoading = true
}

const userProfileThunkFulfilled = (state, {payload}) => {
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











