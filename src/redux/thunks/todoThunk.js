import {createAsyncThunk} from "@reduxjs/toolkit";

export const TodoThunk = createAsyncThunk(
  'getTodo/thunk',
  async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    return await res.json()
  }
)

const todoThunkPending = (state) => {
  state.isLoading = true
}

const todoThunkFulfilled = (state, { payload }) => {
  state.isLoading = false
  state.todoList = payload
}

const todoThunkRejected = (state) => {
  state.isLoading = false
}


export const todoThinkExtraReducer = builder => {
  builder
    .addCase(TodoThunk.pending, todoThunkPending)
    .addCase(TodoThunk.fulfilled, todoThunkFulfilled)
    .addCase(TodoThunk.rejected, todoThunkRejected)
}
